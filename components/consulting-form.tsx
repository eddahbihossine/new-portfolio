"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

type FormValues = z.infer<typeof schema>

const CONTACT_EMAIL = "eh.eddahbi@outlook.com"

export function ConsultingForm() {
  const { t } = useLanguage()

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
    mode: "onTouched",
  })

  const onSubmit = (values: FormValues) => {
    const subjectParts = ["Consulting", values.name]
    if (values.company?.trim()) subjectParts.push(values.company.trim())

    const subject = subjectParts.join(" — ")
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company?.trim() ? `Company: ${values.company.trim()}` : undefined,
      "",
      values.message,
      "",
      "Sent from houssaine portfolio consulting page.",
    ]
      .filter(Boolean)
      .join("\n")

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  return (
    <Card className="rounded-none bg-card/35 backdrop-blur-sm border-border/70">
      <CardHeader className="pb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Inquiry</div>
        <CardTitle className="mt-3 text-xl text-foreground">{t("consulting.form_title")}</CardTitle>
        <CardDescription className="text-muted-foreground">{t("consulting.form_desc")}</CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="mb-6 h-px w-full bg-border/70" />

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground"
            >
              {t("consulting.name")}
            </Label>
            <Input id="name" className="rounded-none border-border/60 bg-background/20" {...form.register("name")} />
            {form.formState.errors.name ? (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground"
            >
              {t("consulting.email")}
            </Label>
            <Input id="email" type="email" className="rounded-none border-border/60 bg-background/20" {...form.register("email")} />
            {form.formState.errors.email ? (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="company"
              className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground"
            >
              {t("consulting.company")}
            </Label>
            <Input id="company" className="rounded-none border-border/60 bg-background/20" {...form.register("company")} />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground"
            >
              {t("consulting.message")}
            </Label>
            <Textarea id="message" rows={6} className="rounded-none border-border/60 bg-background/20" {...form.register("message")} />
            {form.formState.errors.message ? (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            ) : null}
          </div>

          <Button type="submit" className="w-full rounded-none">
            {t("consulting.submit")}
          </Button>

          <p className="text-xs text-muted-foreground">
            Or email directly: <a className="underline underline-offset-4 hover:text-foreground" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
