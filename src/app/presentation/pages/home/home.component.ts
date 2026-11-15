import { Component, inject } from '@angular/core';
import { GetPerfilUsecase } from '../../../core/application/usecases/get-perfil.usecase';
import { GetProyectosUsecase } from '../../../core/application/usecases/get-proyectos.usecase';
import { CardProyectoComponents } from '../../components/card-proyecto/card-proyecto.components';

/** Presents the owner's profile and the collection of portfolio projects. */
@Component({
  selector: 'app-home',
  imports: [CardProyectoComponents],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /** Profile information shown in the hero and profile sections. */
  protected readonly perfil = inject(GetPerfilUsecase).execute();
  /** Projects rendered as individual project cards. */
  protected readonly proyectos = inject(GetProyectosUsecase).execute();
}
