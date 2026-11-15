import { inject, Injectable } from '@angular/core';
import { PortafolioRepository } from '../../domain/repositories/portafolio.repository';
import { Perfil } from '../../domain/models/perfil.model';

/** Retrieves the profile through the configured portfolio repository. */
@Injectable({
  providedIn: 'root',
})
export class GetPerfilUsecase {
  /** Repository used to obtain portfolio data. */
  private readonly repository = inject(PortafolioRepository);

  /** Returns the current portfolio profile. */
  execute(): Perfil {
    return this.repository.getPerfil();
  }
}
