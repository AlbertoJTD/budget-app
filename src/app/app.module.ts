import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { FormComponent } from './form/form.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { ExpensesComponent } from './expenses/expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    FormComponent,
    RevenuesComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
