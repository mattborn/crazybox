import React from 'react'

interface CrazyboxProps {
  title: string
  content: React.ReactNode
}

const Crazybox: React.FC<CrazyboxProps> = ({ title, content }) => {
  return (
    <div className="crazybox">
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  )
}

export default Crazybox
