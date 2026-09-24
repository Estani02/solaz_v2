import type { StaticImageData } from 'next/image'

export interface PropsItemCarousel {
  title?: string
  description?: string
  opacity?: boolean
  img: string | StaticImageData
}

export interface MapIteamCarousel extends PropsItemCarousel {
  id: number
}

export interface FormValues {
  name: string
  phone: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

export interface SorteoFormValues {
  name: string
  email: string
  phone: string
  contactTime: string
}

export type SorteoFormErrors = Partial<Record<keyof SorteoFormValues, string>>
