import { TestBed } from '@angular/core/testing';

import { PortafolioLocalRepositoryImpl } from './portafolio-local.repository.impl';

describe('PortafolioLocalRepositoryImpl', () => {
  let service: PortafolioLocalRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioLocalRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
