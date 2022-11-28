import * as React from 'react'

const ArrowDown = (props) => (
  <svg
    width={20}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8 2v9.5M3.5 7 8 11.5 12.5 7M2.5 13.5h11'
      stroke='#7B4AE2'
      strokeOpacity={0.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ArrowDown
