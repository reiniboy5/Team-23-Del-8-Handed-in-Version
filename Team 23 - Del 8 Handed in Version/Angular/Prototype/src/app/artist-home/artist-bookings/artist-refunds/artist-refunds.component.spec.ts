import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRefundsComponent } from './artist-refunds.component';

describe('ArtistRefundsComponent', () => {
  let component: ArtistRefundsComponent;
  let fixture: ComponentFixture<ArtistRefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistRefundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
