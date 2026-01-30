import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBalance } from './card-balance';

describe('CardBalance', () => {
  let component: CardBalance;
  let fixture: ComponentFixture<CardBalance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBalance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBalance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
