import React from 'react'

const ArrowDown = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#000"
          strokeLinecap="square"
          d="M4.42003325,12.2231759 L19.5799667,12.2231759"
          transform="rotate(90 12 12.223)"
        />
        <polyline
          stroke="#000"
          points="7 20.5 12 15.5 17 20.5"
          transform="rotate(-180 12 18)"
        />
      </g>
    </svg>
  )
}

export default ArrowDown
