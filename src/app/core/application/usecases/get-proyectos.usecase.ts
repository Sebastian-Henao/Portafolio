import { inject, Injectable } from '@angular/core';
import { PortafolioRepository } from '../../domain/repositories/portafolio.repository';
import { Proyecto } from '../../domain/models/proyecto.model';

@Injectable({
  providedIn: 'root',
})
export class GetProyectosUsecase {
  private readonly repository = inject(PortafolioRepository);
 
  execute(): Proyecto[] {
    return this.repository.getProyectos();
  }
}
