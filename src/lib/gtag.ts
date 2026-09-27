declare global {
  interface Window {
    gtag?: (command: 'event', name: string, params?: Record<string, string | number>) => void
  }
}

// Evento de Google Analytics. Si GA no cargó (dev, bloqueador de anuncios), no hace nada.
export const trackEvent = (name: string, params?: Record<string, string | number>) => {
  window.gtag?.('event', name, params)
}
