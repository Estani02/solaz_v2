'use client'
import 'leaflet/dist/leaflet.css'
import { divIcon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { SITE } from '@/config/site'

const pin = divIcon({
  className: '',
  html: '<span class="solaz-pin"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
})

export default function Map() {
  return (
    <MapContainer
      center={SITE.coords}
      className="map-dark h-full w-full"
      scrollWheelZoom={false}
      zoom={16}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={pin} position={SITE.coords}>
        <Popup>
          <strong>Solaz Club</strong>
          <br />
          {SITE.address}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
