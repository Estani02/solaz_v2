import type { SorteoFormValues } from '@/interfaces'

import { NextResponse } from 'next/server'

import { mailOptions, transporter } from '@/config/nodemailer'

const FIELDS: Record<keyof SorteoFormValues, string> = {
  name: 'Nombre',
  email: 'Email',
  phone: 'Celular',
  contactTime: 'Horario de contacto',
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`)

const isValid = (data: Partial<SorteoFormValues>): data is SorteoFormValues =>
  (Object.keys(FIELDS) as (keyof SorteoFormValues)[]).every(
    (key) => typeof data[key] === 'string' && data[key]!.trim() !== '' && data[key]!.length < 200,
  ) && /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/.test(data.email!)

export async function POST(req: Request) {
  const data = (await req.json()) as Partial<SorteoFormValues>

  if (!isValid(data)) {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  const entries = (Object.keys(FIELDS) as (keyof SorteoFormValues)[]).map(
    (key) => [FIELDS[key], data[key].trim()] as const,
  )

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Sorteo Tulum: nuevo interesado - ${data.name.trim()}`,
      text: entries.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html: `<h2>Nuevo interesado en el sorteo Tulum</h2>${entries
        .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
        .join('')}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
