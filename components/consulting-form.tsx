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
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{t("consulting.form_title")}</CardTitle>
        <CardDescription className="text-muted-foreground">{t("consulting.form_desc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">{t("consulting.name")}</Label>
            <Input id="name" {...form.register("name")} />
            {form.formState.errors.name ? (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t("consulting.email")}</Label>
            <Input id="email" type="email" {...form.register("email")} />
            {form.formState.errors.email ? (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{t("consulting.company")}</Label>
            <Input id="company" {...form.register("company")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("consulting.message")}</Label>
            <Textarea id="message" rows={6} {...form.register("message")} />
            {form.formState.errors.message ? (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            ) : null}
          </div>

          <Button type="submit" className="w-full">
            {t("consulting.submit")}
          </Button>

          <p className="text-xs text-muted-foreground">
            Or email directly: <a className="underline underline-offset-4 hover:text-primary" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
