import { Expense } from "./expenses.model";

export class ExpensesService {
  expenses: Expense[] = [
    new Expense('Test 2', 100),
    new Expense('Laptop', 600)
  ];

  deleteExpense(expense: Expense): void {
    const indexRecord: number = this.expenses.indexOf(expense);
    this.expenses.splice(indexRecord, 1);
  }

  addExpense(description: string, amount: number): void {
    this.expenses.push(new Expense(description, amount));
  }
}