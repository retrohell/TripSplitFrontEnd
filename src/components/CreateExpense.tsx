import React, { useState } from 'react'
import { Expense } from '../types/expense.type'

type Props = { expense: Expense, setExpense: (expense: Expense) => void }

export default function CreateExpense({ expense, setExpense }: Props) {


    const onChangeUp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpense({ ...expense, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" value={expense.amount} onChange={onChangeUp} />
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input type="text" name="description" id="description" value={expense.description} onChange={onChangeUp} />
            </div>

        </>
    )
}

// tsrfc
// ts = typescript, r = react, f = functional, c = component