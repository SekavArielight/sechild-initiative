import React from 'react'

const Button = ({title}) => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{title}</button>
  )
}

export default Button