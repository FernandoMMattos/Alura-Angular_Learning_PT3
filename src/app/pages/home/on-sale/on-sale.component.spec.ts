import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSaleComponent } from './on-sale.component';

describe('OnSaleComponent', () => {
  let component: OnSaleComponent;
  let fixture: ComponentFixture<OnSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnSaleComponent]
    });
    fixture = TestBed.createComponent(OnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
