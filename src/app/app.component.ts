import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillInputComponent } from './bill-input/bill-input.component';
import { BillSummaryComponent } from './bill-summary/bill-summary.component';
import { PersonContributionComponent } from './person-contribution/person-contribution.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, BillInputComponent, BillSummaryComponent, PersonContributionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bill Splitter';
}

