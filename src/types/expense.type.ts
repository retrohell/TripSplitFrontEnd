export interface Expense {
    amount: number,
    description: string
}

export interface ExpenseResponse extends Expense {
    id: string,
    payer: string
}