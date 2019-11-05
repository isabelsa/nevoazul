import React from 'react'

const Close = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#E3E1EC"
        transform="translate(.5 .5)"
      >
        <polyline points="-2 8 3 3 8 8" transform="rotate(90 3 5.5)" />
        <polyline points="3 8 8 3 13 8" transform="rotate(-92 8 5.5)" />
      </g>
    </svg>
  )
}

export default Close
