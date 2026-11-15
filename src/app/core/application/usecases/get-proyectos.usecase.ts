import { inject, Injectable } from '@angular/core';
import { PortafolioRepository } from '../../domain/repositories/portafolio.repository';
import { Proyecto } from '../../domain/models/proyecto.model';

/** Retrieves project data through the configured portfolio repository. */
@Injectable({
  providedIn: 'root',
})
export class GetProyectosUsecase {
  /** Repository used to obtain portfolio data. */
  private readonly repository = inject(PortafolioRepository);
 
  /** Returns all projects available in the portfolio. */
  execute(): Proyecto[] {
    return this.repository.getProyectos();
  }
}
