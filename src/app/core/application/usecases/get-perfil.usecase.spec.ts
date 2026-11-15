import { TestBed } from '@angular/core/testing';
import { PortafolioRepository } from '../../domain/repositories/portafolio.repository';
import { GetPerfilUsecase } from './get-perfil.usecase';

describe('GetPerfilUsecase', () => {
  let service: GetPerfilUsecase;
  const perfil = {
    nombreCompleto: 'Ada Lovelace',
    titulo: 'Matemática',
    sobreMi: 'Pionera de la programación',
    githubUrl: 'https://github.com/ada',
    habilidades: ['Análisis'],
    lenguajes: ['TypeScript'],
    tecnologias: ['Angular'],
  };
  const repository = {
    getPerfil: jest.fn().mockReturnValue(perfil),
    getProyectos: jest.fn(),
  };

  beforeEach(() => {
    repository.getPerfil.mockClear();
    TestBed.configureTestingModule({
      providers: [
        GetPerfilUsecase,
        { provide: PortafolioRepository, useValue: repository },
      ],
    });
    service = TestBed.inject(GetPerfilUsecase);
  });

  it('returns the profile from the repository', () => {
    expect(service.execute()).toBe(perfil);
    expect(repository.getPerfil).toHaveBeenCalledTimes(1);
  });
});
