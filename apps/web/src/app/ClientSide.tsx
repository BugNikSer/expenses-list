'use client'

import { useState } from "react"
import { trpc } from "../utils/trpc"

const ClientSide = () => {
  const [greeting, setGreeting] = useState('')

  const [expenses, setExpenses] = useState<{ value: number, label: string }[] | null>(null)

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

  const getExpenses = () => {
    trpc.expenses.list.query({ page: 1, pageSize: 2 }).then(response => {
      console.log(response)
      setExpenses(response)
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

      <div style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <button onClick={greetingFn}>test</button>
        <span>{greeting}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
        <button onClick={logoutFn}>logout</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <h3>Expenses</h3>
        { expenses?.map(e => <div key={e.label}>{e.label} - {e.value}</div>) || <div>empty</div> }
        <button onClick={getExpenses}>get expenses</button>
      </div>
    </div>
  )
}

export default ClientSide
