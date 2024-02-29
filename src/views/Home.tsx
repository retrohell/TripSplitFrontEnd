import React, { useEffect, useState } from 'react'
import { axiosPrivate } from '../utils/axiosPrivate'
import { Guest } from '../types/guest.types'
import CreateExpense from '../components/CreateExpense'
import { Expense, ExpenseResponse } from '../types/expense.type'

type Props = {}
// Agregar en el useEffect nueva llamada que trae los expenses al console.log 

export default function Home({ }: Props) {
  const [guest, setGuest] = useState<Guest>()
  const [expense, setExpense] = useState<Expense>({ amount: 0, description: '' })
  const [expenses, setExpenses] = useState<ExpenseResponse[]>([])

  const handleCreateExpense = () => {
    if (!guest) return
    const payload: Expense = { amount: expense.amount, description: expense.description }

    axiosPrivate.post<Expense>('/expense/', payload).then((res) => {
      setExpense({ amount: 0, description: '' })
      // console.log(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/signin'
      return
    }

    axiosPrivate.get<ExpenseResponse[]>('/expenses/').then((res) => {
      console.log(res.data)
      setExpenses(res.data)

    }).catch((err) => { console.error(err) })

    axiosPrivate.get<Guest>('/guest/').then((res) => {
      setGuest(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }, [])

  return (
    <>
      {guest ? `Hola ${guest.username}` : 'Cargando...'}

      <CreateExpense expense={expense} setExpense={setExpense} ></CreateExpense>

      <button onClick={handleCreateExpense}>Agregar</button>

      {expenses.map((value) => {
        return <div key={value.id}> 
          <p>{value.description}</p>
          <p>{value.amount}</p>
        </div>
      })}
    </>
  )
}