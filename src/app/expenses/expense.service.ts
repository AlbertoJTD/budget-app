import { Expense } from "./expenses.model";

export class ExpensesService {
  expenses: Expense[] = [
    new Expense('Test 2', 90),
    new Expense('Laptop', 600)
  ];
}