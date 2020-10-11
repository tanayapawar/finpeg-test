import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFundComponent } from './card-fund.component';

describe('CardFundComponent', () => {
  let component: CardFundComponent;
  let fixture: ComponentFixture<CardFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
