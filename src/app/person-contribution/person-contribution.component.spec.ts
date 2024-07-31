import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonContributionComponent } from './person-contribution.component';

describe('PersonContributionComponent', () => {
  let component: PersonContributionComponent;
  let fixture: ComponentFixture<PersonContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonContributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
