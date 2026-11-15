import { TestBed } from '@angular/core/testing';
import { PortafolioRepository } from '../../domain/repositories/portafolio.repository';
import { GetProyectosUsecase } from './get-proyectos.usecase';

describe('GetProyectosUsecase', () => {
  let service: GetProyectosUsecase;
  const proyectos = [
    {
      id: 1,
      nombre: 'Proyecto',
      descripcion: 'Descripción',
      tecnologias: ['Angular'],
      funciones: ['Interfaz'],
      repositorioUrl: 'https://github.com/example/project',
      despliegueUrl: 'https://example.com',
    },
  ];
  const repository = {
    getPerfil: jest.fn(),
    getProyectos: jest.fn().mockReturnValue(proyectos),
  };

  beforeEach(() => {
    repository.getProyectos.mockClear();
    TestBed.configureTestingModule({
      providers: [
        GetProyectosUsecase,
        { provide: PortafolioRepository, useValue: repository },
      ],
    });
    service = TestBed.inject(GetProyectosUsecase);
  });

  it('returns the projects from the repository', () => {
    expect(service.execute()).toBe(proyectos);
    expect(repository.getProyectos).toHaveBeenCalledTimes(1);
  });
});
