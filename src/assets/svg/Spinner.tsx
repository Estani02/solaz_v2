import type { SVGProps } from 'react'

import * as React from 'react'
function Spinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={200}
      preserveAspectRatio="xMidYMid"
      style={{
        margin: 'auto',
        background: '0 0',
        display: 'block',
        shapeRendering: 'auto',
      }}
      viewBox="0 0 100 100"
      width={200}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(80 50)">
        <circle fill="#fff" r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(45 -50.355 121.569)">
        <circle fill="#fff" fillOpacity={0.875} r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(90 -15 65)">
        <circle fill="#fff" fillOpacity={0.75} r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(135 -.355 41.569)">
        <circle fill="#fff" fillOpacity={0.625} r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(180 10 25)">
        <circle fill="#fff" fillOpacity={0.5} r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(-135 20.355 8.431)">
        <circle fill="#fff" fillOpacity={0.375} r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(-90 35 -15)">
        <circle fill="#fff" fillOpacity={0.25} r={6}>
          <animateTransform
            attributeName="transform"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(-45 70.355 -71.569)">
        <circle fill="#fff" fillOpacity={0.125} r={6}>
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </svg>
  )
}

export default Spinner
