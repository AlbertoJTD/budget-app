import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { FormComponent } from './form/form.component';
import { RevenuesComponent } from './revenues/revenues.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    FormComponent,
    RevenuesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
