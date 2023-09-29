import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="font-black text-6xl mb-4">Our works</h1>
      {children}
    </div>
  )
}

export default layout