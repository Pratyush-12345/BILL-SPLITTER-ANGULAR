import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillCalculationService } from '../bill-calculation.service';

@Component({
  selector: 'app-bill-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent {
  item = { name: '', quantity: 1, price: 0, category: 'Veg' };

  constructor(private billService: BillCalculationService) {}

  addItem() {
    this.billService.addItem({ ...this.item });
    this.item = { name: '', quantity: 1, price: 0, category: 'Veg' };
  }
}

