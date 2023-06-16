import { Component, OnInit } from '@angular/core';
import { RevenuesService } from './revenue.service';
import { Revenue } from './revenues.model';

@Component({
  selector: 'app-revenues',
  templateUrl: './revenues.component.html',
  styleUrls: ['./revenues.component.css']
})
export class RevenuesComponent implements OnInit{
  revenues: Revenue[] = [];
  
  constructor(private revenueService: RevenuesService) { }
  
  ngOnInit(): void {
    this.revenues = this.revenueService.revenues;
  }

  deleteRecord(revenue: Revenue): void {
    console.log('entra deleteRecord()');
    this.revenueService.deleteRevenue(revenue);
  }
}
