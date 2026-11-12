import { inject, Injectable } from '@angular/core';
import { PortafolioRepository } from '../../domain/repositories/portafolio.repository';
import { Perfil } from '../../domain/models/perfil.model';

@Injectable({
  providedIn: 'root',
})
export class GetPerfilUsecase {
  private readonly repository = inject(PortafolioRepository);

  execute(): Perfil {
    return this.repository.getPerfil();
  }
}
