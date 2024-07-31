import { Injectable } from '@angular/core';

interface Item {
  name: string;
  quantity: number;
  price: number;
  category: string;
}

interface Person {
  name: string;
  items: Item[];
}

@Injectable({
  providedIn: 'root'
})
export class BillCalculationService {
  items: Item[] = [];

  addItem(item: Item) {
    this.items.push(item);
  }

  getSubtotal() {
    return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  getGST() {
    return this.getSubtotal() * 0.05;
  }

  getServiceCharge() {
    return this.getSubtotal() * 0.05;
  }

  getGrandTotal() {
    return this.getSubtotal() + this.getGST() + this.getServiceCharge();
  }

  calculatePersonContribution(person: Person, totalPersons: number) {
    const itemTotal = person.items.reduce((total, item) => total + item.price, 0);
    const sharedCost = (this.getGST() + this.getServiceCharge()) / totalPersons;
    return itemTotal + sharedCost;
  }
}
