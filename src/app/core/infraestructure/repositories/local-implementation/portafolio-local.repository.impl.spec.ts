import { TestBed } from '@angular/core/testing';
import { PortafolioLocalRepositoryImpl } from './portafolio-local.repository.impl';

describe('PortafolioLocalRepositoryImpl', () => {
  let service: PortafolioLocalRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortafolioLocalRepositoryImpl],
    });
    service = TestBed.inject(PortafolioLocalRepositoryImpl);
  });

  it('returns the local profile', () => {
    const perfil = service.getPerfil();

    expect(perfil.nombreCompleto).toBe('Sebastian Henao Gamboa');
    expect(perfil.habilidades).toContain('Pruebas unitarias');
    expect(perfil.lenguajes).toContain('TypeScript');
    expect(perfil.tecnologias).toContain('Angular');
  });

  it('returns the local projects with their links and details', () => {
    const proyectos = service.getProyectos();

    expect(proyectos).toHaveLength(5);
    expect(proyectos[0]).toMatchObject({
      id: 1,
      nombre: 'Portafolio Personal',
      tecnologias: expect.arrayContaining(['Angular', 'TypeScript']),
      funciones: expect.arrayContaining(['Desarrollo de la interfaz de usuario']),
      repositorioUrl: expect.stringContaining('github.com'),
      despliegueUrl: expect.stringContaining('github.io'),
    });
    expect(proyectos[4].nombre).toContain('Clean Architecture');
  });
});
