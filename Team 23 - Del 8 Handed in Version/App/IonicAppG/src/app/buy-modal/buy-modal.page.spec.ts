import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyModalPage } from './buy-modal.page';

describe('BuyModalPage', () => {
  let component: BuyModalPage;
  let fixture: ComponentFixture<BuyModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
