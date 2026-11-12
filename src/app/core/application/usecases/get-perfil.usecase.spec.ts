import { TestBed } from '@angular/core/testing';

import { GetPerfilUsecase } from './get-perfil.usecase.js';

describe('GetPerfilUsecase', () => {
  let service: GetPerfilUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPerfilUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
