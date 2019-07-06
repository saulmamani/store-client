import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsContactComponent } from './maps-contact.component';

describe('MapsContactComponent', () => {
  let component: MapsContactComponent;
  let fixture: ComponentFixture<MapsContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
