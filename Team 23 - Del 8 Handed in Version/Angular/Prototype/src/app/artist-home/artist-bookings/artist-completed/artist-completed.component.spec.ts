import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCompletedComponent } from './artist-completed.component';

describe('ArtistCompletedComponent', () => {
  let component: ArtistCompletedComponent;
  let fixture: ComponentFixture<ArtistCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
