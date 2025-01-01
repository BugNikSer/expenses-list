'use client'

import { useState, useEffect } from "react"
import { trpc } from "./trpc"

const ClientSide = () => {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    trpc.hello.query({ name: 'bug' }).then(response => {
      console.log(response)
      setGreeting(response)
    })
  })

  return <div>{ greeting } (client)</div>
}

export default ClientSide
