import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerSelectorComponent } from './traveler-selector.component';

describe('TravelerSelectorComponent', () => {
  let component: TravelerSelectorComponent;
  let fixture: ComponentFixture<TravelerSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelerSelectorComponent]
    });
    fixture = TestBed.createComponent(TravelerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
