import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillCalculationService } from '../bill-calculation.service';

@Component({
  selector: 'app-bill-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent {
  constructor(public billService: BillCalculationService) {}
}


