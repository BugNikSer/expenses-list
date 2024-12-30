'use client'

import { useState, useEffect } from "react"
import { trpc } from "./trpc"

const ClientSide = () => {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    trpc.hello.query({ name: 'bug' }).then(response => {
      setGreeting(response.greeting)
    })
  })

  return <div>{ greeting } (client)</div>
}

export default ClientSide
