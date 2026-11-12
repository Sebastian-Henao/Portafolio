import { TestBed } from '@angular/core/testing';

import { GetProyectosUsecase } from './get-proyectos.usecase.js';

describe('GetProyectosUsecase', () => {
  let service: GetProyectosUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProyectosUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
