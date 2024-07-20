import React from 'react'
import { tech } from '../constants'

const MobileTechList = () => {
  return (
    <div className="contents md:hidden">
    {tech.map((t, i) => (
      <span key={`${t.name}-${i}`}>{`${t.name}${
        i === tech.length - 2 ? " and " : ", "
      }`}</span>
    ))}
  </div>
  )
}

export default MobileTechList
