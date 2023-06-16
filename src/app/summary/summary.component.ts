import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() totalRevenues: number = 0;
  @Input() totalExpenses: number = 0;
  @Input() totalPercentage: number = 0;
  @Input() totalBudget: number = 0;
}
