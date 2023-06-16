import { Revenue } from "./revenues.model";

export class RevenuesService {
  revenues: Revenue[] = [
    new Revenue('Test', 1200),
    new Revenue('Clothes', 400)
  ];
}