import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtClassComponent } from './art-class.component';

describe('ArtClassComponent', () => {
  let component: ArtClassComponent;
  let fixture: ComponentFixture<ArtClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
