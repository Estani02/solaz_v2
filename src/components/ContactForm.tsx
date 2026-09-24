'use client'
import type { FormErrors, FormValues } from '@/interfaces'

import { AnimatePresence, motion } from 'framer-motion'
import { Formik } from 'formik'
import { useState } from 'react'

import Spinner from '@/assets/svg/Spinner'
import { sendFormContact } from '@/lib/api'
import FormField from '@/components/ui/FormField'
import { EASE_OUT } from '@/components/ui/motion'

const INITIAL_VALUES: FormValues = { name: '', email: '', phone: '', message: '' }

const validate = (values: FormValues) => {
  const errors: FormErrors = {}
  const digits = values.phone.replace(/\D/g, '')

  if (values.name.trim().length < 2) errors.name = 'Ingresá tu nombre y apellido'
  if (!/^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/.test(values.email)) errors.email = 'Ingresá un mail válido'
  if (digits.length < 10 || digits.length > 13)
    errors.phone = 'Ingresá tu teléfono con característica'
  if (!values.message.trim()) errors.message = 'Contanos en qué te podemos ayudar'
  else if (values.message.length > 1500) errors.message = 'El mensaje es demasiado largo'

  return errors
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  return (
    <AnimatePresence mode="wait">
      {status === 'sent' ? (
        <motion.div
          key="sent"
          animate={{ opacity: 1, scale: 1 }}
          className="flex min-h-[30rem] flex-col items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <motion.span
            animate={{ scale: 1, rotate: 0 }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-solaz text-5xl"
            initial={{ scale: 0, rotate: -90 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
          >
            ✓
          </motion.span>
          <h3 className="font-display text-3xl font-extrabold">¡Recibimos tu consulta!</h3>
          <p className="max-w-xs text-white/60">Nos vamos a comunicar con vos muy pronto.</p>
          <button
            className="text-sm font-semibold uppercase tracking-widest text-solaz underline-offset-4 hover:underline"
            type="button"
            onClick={() => {
              setStatus('idle')
            }}
          >
            Enviar otra consulta
          </button>
        </motion.div>
      ) : (
        <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
          <Formik
            initialValues={INITIAL_VALUES}
            validate={validate}
            onSubmit={async (values, { resetForm }) => {
              try {
                await sendFormContact(values)
                resetForm()
                setStatus('sent')
              } catch (error) {
                setStatus('error')
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form noValidate className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <FormField
                  autoComplete="name"
                  error={touched.name ? errors.name : undefined}
                  label="Nombre y apellido"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    autoComplete="email"
                    error={touched.email ? errors.email : undefined}
                    inputMode="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormField
                    autoComplete="tel"
                    error={touched.phone ? errors.phone : undefined}
                    inputMode="tel"
                    label="Teléfono"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                <FormField
                  multiline
                  error={touched.message ? errors.message : undefined}
                  label="Tu mensaje"
                  name="message"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <motion.button
                  className="mt-2 flex items-center justify-center gap-3 rounded-full bg-solaz px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_20px_50px_-15px_rgba(225,40,38,0.9)] disabled:opacity-60"
                  disabled={isSubmitting}
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? <Spinner className="h-6 w-6" /> : 'Enviar consulta'}
                </motion.button>
                <AnimatePresence>
                  {status === 'error' ? (
                    <motion.p
                      animate={{ opacity: 1 }}
                      className="text-center text-sm text-solaz"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                    >
                      No pudimos enviar tu consulta. Probá de nuevo o escribinos por WhatsApp.
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </form>
            )}
          </Formik>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
