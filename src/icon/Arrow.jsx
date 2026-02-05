import React from 'react'

function Arrow({size}) {
  return (
    <svg width={size || 18} height={size || 18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.75H12.1275L7.935 13.9425L9 15L15 9L9 3L7.9425 4.0575L12.1275 8.25H3V9.75Z" fill="black"/>
    </svg>
  )
}

export default Arrow
