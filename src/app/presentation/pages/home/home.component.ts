import { Component, inject } from '@angular/core';
import { GetPerfilUsecase } from '../../../core/application/usecases/get-perfil.usecase';
import { GetProyectosUsecase } from '../../../core/application/usecases/get-proyectos.usecase';
import { CardProyectoComponents } from '../../components/card-proyecto/card-proyecto.components';

@Component({
  selector: 'app-home',
  imports: [CardProyectoComponents],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly perfil = inject(GetPerfilUsecase).execute();
  protected readonly proyectos = inject(GetProyectosUsecase).execute();
}
