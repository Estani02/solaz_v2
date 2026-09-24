import type { FormValues } from '@/interfaces'

import { NextResponse } from 'next/server'

import { mailOptions, transporter } from '@/config/nodemailer'

const FIELDS: Record<keyof FormValues, string> = {
  name: 'Nombre',
  email: 'Email',
  phone: 'Teléfono',
  message: 'Mensaje',
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`)

const isValid = (data: Partial<FormValues>): data is FormValues =>
  (Object.keys(FIELDS) as (keyof FormValues)[]).every(
    (key) => typeof data[key] === 'string' && data[key]!.trim() !== '',
  ) &&
  data.message!.length <= 1500 &&
  /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/.test(data.email!)

export async function POST(req: Request) {
  const data = (await req.json()) as Partial<FormValues>

  if (!isValid(data)) {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  const entries = (Object.keys(FIELDS) as (keyof FormValues)[]).map(
    (key) => [FIELDS[key], data[key].trim()] as const,
  )

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Nueva consulta web - ${data.name.trim()}`,
      text: entries.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html: `<h2>Nueva consulta desde la web</h2>${entries
        .map(
          ([label, value]) =>
            `<p><strong>${label}:</strong><br/>${escapeHtml(value).replace(/\n/g, '<br/>')}</p>`,
        )
        .join('')}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
