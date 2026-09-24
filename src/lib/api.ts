import type { FormValues, SorteoFormValues } from '@/interfaces'

export async function sendFormContact(formData: FormValues) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
}

export async function sendFormSorteo(formData: SorteoFormValues) {
  const response = await fetch('/api/sorteo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
}
