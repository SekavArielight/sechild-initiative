import React from 'react'

const Button = ({title}) => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-[10px] hover:bg-blue-700 text-sm">{title}</button>
  )
}

export default Button