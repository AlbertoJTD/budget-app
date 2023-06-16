import { Component } from '@angular/core';
import { Revenue } from './revenues/revenues.model';
import { Expense } from './expenses/expenses.model';
import { RevenuesService } from './revenues/revenue.service';
import { ExpensesService } from './expenses/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';

  revenues: Revenue[] = [];
  expenses: Expense[] = [];

  constructor(private revenueService: RevenuesService, private expenseService: ExpensesService) {
    this.revenues = revenueService.revenues;
    this.expenses = expenseService.expenses;
  }

  getTotalRevenue(): number {
    let total: number = 0;
    this.revenues.forEach(revenue => {
      total += revenue.amount;
    });

    return total;
  }

  getTotalExpense(): number {
    let total: number = 0;
    this.expenses.forEach(expense => {
      total += expense.amount;
    });

    return total;
  }

  getTotalPercentage(): number {
    return  this.getTotalExpense() / this.getTotalRevenue();
  }

  getTotalBudget(): number {
    return this.getTotalRevenue() - this.getTotalExpense();
  }
}
