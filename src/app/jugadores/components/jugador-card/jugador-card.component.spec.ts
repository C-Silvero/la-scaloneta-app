import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorCardComponent } from './jugador-card.component';

describe('JugadorCardComponent', () => {
  let component: JugadorCardComponent;
  let fixture: ComponentFixture<JugadorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
