'use client'
import type { FormErrors, FormValues } from '@/interfaces'

import { Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import swal from 'sweetalert'

import Spinner from '@/assets/svg/Spinner'
import { sendFormContact } from '@/lib/api'

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      validate={(value: FormValues) => {
        const errors: FormErrors = {}
        const phoneRegExpression = /^[1-9][0-9]{2}[1-9][0-9]{6}$/
        const emailRegExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

        if (!value.name) {
          errors.name = 'Rellene con nombre y apellido*'
        } else if (!/^[a-zA-Z]+/.test(value.name)) {
          errors.name = 'El nombre no es válido. Porfavor ingrese otro'
        }

        if (!value.phone) {
          errors.phone = 'Rellene con su teléfono *'
        } else if (!phoneRegExpression.test(value.phone)) {
          errors.phone = 'El número es invalido *'
        }

        if (!value.email) {
          errors.email = 'Rellene con su email *'
        } else if (!emailRegExpression.test(value.email)) {
          errors.email = 'El email es invalido *'
        }

        if (!value.message) {
          errors.message = 'Rellena con tu mensaje *'
        } else if (value.message.length > 1500) {
          errors.message = 'El mensaje es demasiado largo *'
        }

        return errors
      }}
      onSubmit={async (value, { resetForm }) => {
        try {
          setIsLoading(true)
          await sendFormContact(value)
          void swal('Se enviaron tus datos!', 'Nos estaremos comunicando pronto', 'success')
          resetForm()
        } catch (error) {
          void swal('Error!', 'Vuelve a intentarlo', 'error')
        } finally {
          setIsLoading(false) // Ocultar mensaje de carga, tanto si la solicitud tiene éxito como si falla.
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
        <form className="flex w-full flex-col gap-3 text-white" onSubmit={handleSubmit}>
          <TextField
            error={errors.name && touched.name ? true : false}
            helperText={errors.name && touched.name ? errors.name : undefined}
            id={errors.name && touched.name ? 'outlined-error-helper-text' : 'outlined-basic'}
            label="Nombre y Apellido"
            name="name"
            value={values.name}
            variant="outlined"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            error={errors.email && touched.email ? true : false}
            helperText={errors.email && touched.email ? errors.email : undefined}
            id={errors.email && touched.email ? 'outlined-error-helper-text' : 'outlined-basic'}
            label="Email"
            name="email"
            value={values.email}
            variant="outlined"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            error={errors.phone && touched.phone ? true : false}
            helperText={errors.phone && touched.phone ? errors.phone : undefined}
            id={errors.phone && touched.phone ? 'outlined-error-helper-text' : 'outlined-basic'}
            label="Teléfono"
            name="phone"
            type="number"
            value={values.phone}
            variant="outlined"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            multiline
            error={errors.message && touched.message ? true : false}
            helperText={errors.message && touched.message ? errors.message : undefined}
            id={
              errors.name && touched.message
                ? 'filled-textarea-error-helper-text'
                : 'filled-textarea'
            }
            label="Tu mensaje"
            name="message"
            rows={4}
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Button
            className="bg-[#1976d2]"
            disabled={!values.email || !values.message || !values.name || !values.phone}
            type="submit"
            variant="contained"
            onClick={void handleSubmit}
          >
            {isLoading ? <Spinner className="h-[24.5px] w-[24.5px]" /> : 'Envar'}
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default ContactForm
