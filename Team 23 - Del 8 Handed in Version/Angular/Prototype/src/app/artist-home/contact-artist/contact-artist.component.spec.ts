import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactArtistComponent } from './contact-artist.component';

describe('ContactArtistComponent', () => {
  let component: ContactArtistComponent;
  let fixture: ComponentFixture<ContactArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
