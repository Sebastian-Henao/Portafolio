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
    fixture.componentRef.setInput('proyecto', {
      id: 1,
      nombre: 'Proyecto de prueba',
      descripcion: 'Descripción del proyecto',
      tecnologias: ['Angular', 'TypeScript'],
      funciones: ['Diseñar interfaz'],
      repositorioUrl: 'https://github.com/example/project',
      despliegueUrl: 'https://example.com/project',
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the project details, technologies, features, and links', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h3')?.textContent).toContain('Proyecto de prueba');
    expect(compiled.textContent).toContain('Descripción del proyecto');
    expect(compiled.querySelectorAll('.tags li')).toHaveLength(2);
    expect(compiled.querySelector('.features li')?.textContent).toContain('Diseñar interfaz');
    expect(compiled.querySelector('.links a')?.getAttribute('href')).toBe(
      'https://github.com/example/project',
    );
    expect(compiled.querySelector('.links .primary')?.getAttribute('href')).toBe(
      'https://example.com/project',
    );
  });
});
