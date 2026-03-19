"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, OrbitControls, Stars, MeshDistortMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { useTheme } from "next-themes"
import type { Mesh, Group } from "three"

function FloatingGeometry({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function Torus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
      </mesh>
    </Float>
  )
}

function FloatingBox({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} wireframe />
      </mesh>
    </Float>
  )
}

function ParticleField({ isDark }: { isDark: boolean }) {
  const count = 200
  const groupRef = useRef<Group>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return pos
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          color={isDark ? "#5eead4" : "#0d9488"} 
          transparent 
          opacity={isDark ? 0.6 : 0.4} 
        />
      </points>
    </group>
  )
}

function Scene({ isDark }: { isDark: boolean }) {
  const primaryColor = isDark ? "#5eead4" : "#0d9488"
  const secondaryColor = isDark ? "#38bdf8" : "#0284c7"
  const tertiaryColor = isDark ? "#0ea5e9" : "#0369a1"
  const bgColor = isDark ? "#0f172a" : "#f8fafc"
  
  return (
    <>
      <color attach="background" args={[bgColor]} />
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 0.8} color={primaryColor} />
      <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.3} color={secondaryColor} />
      <spotLight position={[0, 10, 0]} intensity={isDark ? 0.5 : 0.4} color="#ffffff" angle={0.3} penumbra={1} />
      
      <Stars radius={100} depth={50} count={isDark ? 1000 : 500} factor={4} saturation={0} fade speed={1} />
      
      <FloatingGeometry position={[-4, 1, -2]} color={primaryColor} scale={0.8} />
      <FloatingGeometry position={[4, -1, -3]} color={secondaryColor} scale={0.6} />
      <FloatingGeometry position={[3, 2.5, -4]} color={tertiaryColor} scale={0.5} />
      
      <Torus position={[-3, -2, -2]} color={primaryColor} />
      <Torus position={[5, 0, -5]} color={tertiaryColor} />
      
      <FloatingBox position={[2, -2, -1]} color={primaryColor} />
      <FloatingBox position={[-5, 2, -3]} color={secondaryColor} />
      <FloatingBox position={[0, -3, -4]} color={tertiaryColor} />
      
      <ParticleField isDark={isDark} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

export default function Scene3D() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  )
}
