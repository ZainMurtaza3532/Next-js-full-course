'use client'
import Button from '@/Button'
import React, { useState } from 'react'

const Page = () => {
  const [count, setCount] = useState<number>(0) // initialize here

  return (
    <div>
      <p>{count}</p>
      <Button data="Click me!" action={() => setCount(c => c + 1)} />
    </div>
  )
}

export default Page