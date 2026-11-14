import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProyectoComponents } from './card-proyecto.components';

describe('CardProyectoComponents', () => {
  let component: CardProyectoComponents;
  let fixture: ComponentFixture<CardProyectoComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProyectoComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProyectoComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
