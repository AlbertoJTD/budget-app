import { Component } from '@angular/core';
import { RevenuesService } from '../revenues/revenue.service';
import { ExpensesService } from '../expenses/expense.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  operation: string = 'revenue';
  descriptionInput: string = '';
  amountInput: number = 0;
  
  constructor(private revenuesService: RevenuesService, private expensesService: ExpensesService) { }

  operationType(event: any): void {
    this.operation = event.target.value;
  }

  addRecord(): void {
    if (this.operation == 'revenue'){
      this.revenuesService.addRevenue(this.descriptionInput, this.amountInput);
    } else {
      this.expensesService.addExpense(this.descriptionInput, this.amountInput);
    }

    this.cleanInputs();
  }

  cleanInputs(): void {
    this.descriptionInput = '';
    this.amountInput = 0;
  }
}
