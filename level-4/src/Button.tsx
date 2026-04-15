import React from 'react'

type ButtonProps = {
  data: string
  action: () => void
}

const Button = ({ data, action }: ButtonProps) => {
  return (
    <button onClick={action}>
      {data}
    </button>
  )
}

export default Button