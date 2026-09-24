'use client'
import type { SorteoFormErrors, SorteoFormValues } from '@/interfaces'
import type { ChangeEvent, FocusEvent } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { Formik } from 'formik'
import { useState } from 'react'

import Spinner from '@/assets/svg/Spinner'
import { sendFormSorteo } from '@/lib/api'

import { EASE_OUT, Eyebrow, Reveal } from './motion'

const CONTACT_TIMES = ['Mañana', 'Mediodía', 'Tarde', 'Noche']

const INITIAL_VALUES: SorteoFormValues = { name: '', email: '', phone: '', contactTime: '' }

const validate = (values: SorteoFormValues) => {
  const errors: SorteoFormErrors = {}
  const digits = values.phone.replace(/\D/g, '')

  if (values.name.trim().length < 2) errors.name = 'Ingresá tu nombre'
  if (!/^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/.test(values.email)) errors.email = 'Ingresá un mail válido'
  if (digits.length < 10 || digits.length > 13)
    errors.phone = 'Ingresá tu celular con característica'
  if (!values.contactTime) errors.contactTime = 'Elegí un horario'

  return errors
}

interface FieldProps {
  name: keyof SorteoFormValues
  label: string
  type?: string
  inputMode?: 'email' | 'tel' | 'text'
  autoComplete: string
  value: string
  error?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

function Field({ name, label, type = 'text', error, ...props }: FieldProps) {
  return (
    <label className="group relative block">
      <input
        className={`peer w-full rounded-2xl border bg-white/[0.04] px-5 pb-3 pt-7 text-lg text-sand outline-none transition-colors duration-300 placeholder:text-transparent focus:bg-white/[0.07] ${
          error ? 'border-solaz' : 'border-white/15 focus:border-lagoon'
        }`}
        id={name}
        name={name}
        placeholder={label}
        type={type}
        {...props}
      />
      <span className="pointer-events-none absolute left-5 top-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-lagoon">
        {label}
      </span>
      <AnimatePresence>
        {error ? (
          <motion.span
            animate={{ opacity: 1, height: 'auto' }}
            className="block overflow-hidden pl-2 pt-1 text-sm text-solaz"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            {error}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </label>
  )
}

export default function SorteoForm() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36" id="participar">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <Eyebrow tone="solaz">Quiero participar</Eyebrow>
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-sand md:text-7xl">
            Comenzá a entrenar{' '}
            <span className="font-serif font-normal italic text-lagoon">hoy</span>
          </h2>
          <p className="max-w-md text-white/60 md:text-lg">
            Dejanos tus datos y te contactamos en el horario que elijas para contarte cómo sumarte
            al plan semestral y participar del sorteo.
          </p>
        </Reveal>

        <Reveal
          className="relative min-h-[34rem] rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 md:p-10"
          delay={0.15}
        >
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[30rem] flex-col items-center justify-center gap-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                <motion.span
                  animate={{ scale: 1, rotate: 0 }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-lagoon text-5xl text-ocean"
                  initial={{ scale: 0, rotate: -90 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                >
                  ✓
                </motion.span>
                <h3 className="font-display text-3xl font-extrabold text-sand">
                  ¡Recibimos tus datos!
                </h3>
                <p className="max-w-xs text-white/60">
                  Te vamos a contactar en el horario que elegiste. ¡Nos vemos en Tulum!
                </p>
                <button
                  className="text-sm font-semibold uppercase tracking-widest text-lagoon underline-offset-4 hover:underline"
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
                      await sendFormSorteo(values)
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
                    setFieldValue,
                  }) => (
                    <form noValidate className="flex flex-col gap-5" onSubmit={handleSubmit}>
                      <Field
                        autoComplete="name"
                        error={touched.name ? errors.name : undefined}
                        label="Nombre"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <Field
                        autoComplete="email"
                        error={touched.email ? errors.email : undefined}
                        inputMode="email"
                        label="Mail"
                        name="email"
                        type="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <Field
                        autoComplete="tel"
                        error={touched.phone ? errors.phone : undefined}
                        inputMode="tel"
                        label="Celular"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <fieldset className="flex flex-col gap-3">
                        <legend className="mb-3 pl-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                          Horario de contacto
                        </legend>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {CONTACT_TIMES.map((time) => {
                            const selected = values.contactTime === time

                            return (
                              <button
                                key={time}
                                aria-pressed={selected}
                                className={`relative rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-colors duration-300 ${
                                  selected
                                    ? 'border-lagoon text-ocean'
                                    : 'border-white/15 text-white/70 hover:border-white/40'
                                }`}
                                type="button"
                                onClick={() => void setFieldValue('contactTime', time)}
                              >
                                {selected ? (
                                  <motion.span
                                    className="absolute inset-0 -z-0 rounded-2xl bg-lagoon"
                                    layoutId="contact-time"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                  />
                                ) : null}
                                <span className="relative">{time}</span>
                              </button>
                            )
                          })}
                        </div>
                        {touched.contactTime && errors.contactTime ? (
                          <span className="pl-2 text-sm text-solaz">{errors.contactTime}</span>
                        ) : null}
                      </fieldset>

                      <motion.button
                        className="mt-4 flex items-center justify-center gap-3 rounded-full bg-solaz px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_20px_50px_-15px_rgba(225,40,38,0.9)] disabled:opacity-60"
                        disabled={isSubmitting}
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? <Spinner className="h-6 w-6" /> : 'Quiero participar'}
                      </motion.button>
                      <AnimatePresence>
                        {status === 'error' ? (
                          <motion.p
                            animate={{ opacity: 1 }}
                            className="text-center text-sm text-solaz"
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                          >
                            No pudimos enviar tus datos. Probá de nuevo en unos minutos.
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </form>
                  )}
                </Formik>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
