import React from 'react'

function Star({size}) {
  return (
    <svg width={size || 24} height={ size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.4697L17.8514 21L16.3035 14.3407L21.4688 9.86292L14.6594 9.27816L12 3L9.34017 9.27816L2.53125 9.86292L7.6965 14.3407L6.14817 21L12 17.4697Z" fill="#EFE343"/>
    </svg>
  )
}

export default Star
