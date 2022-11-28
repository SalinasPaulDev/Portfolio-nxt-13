import * as React from 'react'

const LinkedinIcon = (props) => (
  <svg
    width={32}
    height={32}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M16 0c8.837 0 16 7.164 16 16s-7.163 16-16 16S0 24.836 0 16 7.163 0 16 0Z'
        fill='#fff'
        fillOpacity={0.5}
      />
      <path
        d='M9.016 21.984h2.996v-9.986H9.016v9.986Zm11.672-10.332c-1.454 0-2.755.531-3.678 1.703v-1.39h-3.007v10.02h3.007v-5.419c0-1.145 1.05-2.262 2.363-2.262 1.314 0 1.638 1.117 1.638 2.234v5.445h2.996v-5.668c0-3.937-1.864-4.663-3.319-4.663ZM10.5 11a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 10.5 11Z'
        fill='#090E16'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
)

export default LinkedinIcon
