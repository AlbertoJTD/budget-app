import { Revenue } from "./revenues.model";

export class RevenuesService {
  revenues: Revenue[] = [
    new Revenue('Test', 20),
    new Revenue('Clothes', 400)
  ];
}