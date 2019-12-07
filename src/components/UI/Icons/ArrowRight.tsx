import React from 'react'

const ArrowRight = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        transform="translate(4 7)"
      >
        <path strokeLinecap="square" d="M0,5 L15,5" />
        <polyline
          points="8.5 7.5 13.5 2.5 18.5 7.5"
          transform="rotate(90 13.5 5)"
        />
      </g>
    </svg>
  )
}

export default ArrowRight
