/* eslint-disable no-console */
import type { FormValues } from '@/interfaces'

export async function sendFormContact(formData: FormValues) {
  await fetch('/api/contact', {
    method: 'POST', // Método de solicitud
    headers: {
      'Content-Type': 'application/json', // Tipo de contenido que se envía en el cuerpo de la solicitud
    },
    body: JSON.stringify(formData), // Convertir el objeto formData a JSON
  })
    .then((response) => {
      // Manejar la respuesta del servidor
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json() // Leer el cuerpo de la respuesta como JSON
    })
    .then((data) => {
      console.log(data) // Aquí puedes manejar la respuesta del backend
    })
    .catch((error) => {
      console.error('❌Error:', error) // Manejar errores en caso de que ocurran
      throw error
    })
}
