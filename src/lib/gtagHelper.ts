declare global {
  interface Window {
    gtag: (event: string, GA_MEASUREMENT_ID: string, options?: Record<string, any>) => void
  }
}

// Luego puedes usar la función 'pageview'
export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}
