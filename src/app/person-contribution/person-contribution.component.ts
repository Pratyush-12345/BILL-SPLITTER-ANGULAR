import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillCalculationService } from '../bill-calculation.service';

interface Person {
  name: string;
  items: any[];
}

@Component({
  selector: 'app-person-contribution',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './person-contribution.component.html',
  styleUrls: ['./person-contribution.component.css']
})
export class PersonContributionComponent {
  persons: Person[] = [];
  newPerson: Person = { name: '', items: [] };

  constructor(public billService: BillCalculationService) {}

  addPerson() {
    this.persons.push({ ...this.newPerson });
    this.newPerson = { name: '', items: [] };
  }

  addItemToPerson(person: Person, itemName: string) {
    const item = this.billService.items.find(i => i.name === itemName);
    if (item) {
      person.items.push(item);
    }
  }

  getPersonContribution(person: Person) {
    return this.billService.calculatePersonContribution(person, this.persons.length);
  }
}
