import { Component, Input, OnInit } from '@angular/core';
import { Expense } from './expenses.model';
import { ExpensesService } from './expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  @Input() totalRevenues: number = 0;

  constructor(private expensesService: ExpensesService) { }
  
  ngOnInit(): void {
    this.expenses = this.expensesService.expenses;
  }

  deleteRecord(expense: Expense): void {
    this.expensesService.deleteExpense(expense);
  }
}
