import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistbookingComponent } from './artistbooking.component';

describe('ArtistbookingComponent', () => {
  let component: ArtistbookingComponent;
  let fixture: ComponentFixture<ArtistbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
