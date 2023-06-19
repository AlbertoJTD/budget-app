import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { FormComponent } from './form/form.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { RevenuesService } from './revenues/revenue.service';
import { ExpensesService } from './expenses/expense.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    FormComponent,
    RevenuesComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RevenuesService, ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
