import { Revenue } from "./revenues.model";

export class RevenuesService {
  revenues: Revenue[] = [
    new Revenue('Test', 1200),
    new Revenue('Clothes', 400)
  ];

  deleteRevenue(revenue: Revenue): void {
    const indexRecord: number = this.revenues.indexOf(revenue);
    this.revenues.splice(indexRecord, 1);
  }
}