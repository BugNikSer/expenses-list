'use client'

import { useState } from "react"
import { trpc } from "../utils/trpc"

const ClientSide = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [greeting, setGreeting] = useState('')

  const loginFn = () => {
    trpc.auth.login.mutate({ login, password }).then(response => {
      console.log(response);
      setLogin('');
      setPassword('');
    })
  }

  const greetingFn = () => {
    trpc.auth.test.query().then(response => {
      console.log(response)
      setGreeting(response ? String(response) : 'no response')
    })
  }

  const logoutFn = () => {
    trpc.auth.logout.query().then(response => {
      console.log(response);
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <input value={login} onChange={(ev) => setLogin(ev.target.value)} />
        <input value={password} onChange={(ev) => setPassword(ev.target.value)} />
        <button onClick={loginFn}>login</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <button onClick={greetingFn}>test</button>
        <span>{greeting}</span>
      </div>
      <button onClick={logoutFn}>logout</button>
    </div>
  )
}

export default ClientSide
