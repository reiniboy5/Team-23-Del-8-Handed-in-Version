import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtClassesComponent } from './art-classes.component';

describe('ArtClassesComponent', () => {
  let component: ArtClassesComponent;
  let fixture: ComponentFixture<ArtClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
