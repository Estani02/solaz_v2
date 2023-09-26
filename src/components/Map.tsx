/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

function Map() {
  const cutomIcon = new Icon({
    iconUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/274px-Google_Maps_pin.svg.png',
    iconSize: [24, 36],
  })

  return (
    <div className="z-[10] flex h-[400px] w-full">
      <MapContainer
        center={[-31.269694381049128, -64.30207046192292]}
        className="h-full w-full"
        scrollWheelZoom={false}
        zoom={16}
      >
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <Marker icon={cutomIcon} position={[-31.269694381049128, -64.30207046192292]}>
          <Popup>
            SOLAZ club <br />
            Av. Malvinas Argentinas 811, X5107 Mendiolaza, Córdoba
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
