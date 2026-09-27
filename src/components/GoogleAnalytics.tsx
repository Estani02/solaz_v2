import Script from 'next/script'

import { SITE } from '@/config/site'

// Solo en producción, para que las visitas de desarrollo no ensucien los reportes.
// Las navegaciones entre páginas las mide GA solo ("Medición mejorada" → cambios en el
// historial), así que no hace falta mandar page_view a mano en cada cambio de ruta.
export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE.gaId}');`}
      </Script>
    </>
  )
}
