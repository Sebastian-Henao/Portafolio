import { Component, input } from '@angular/core';
import { Proyecto } from '../../../core/domain/models/proyecto.model';

/** Displays the details and links for one portfolio project. */
@Component({
  selector: 'app-card-proyecto',
  templateUrl: './card-proyecto.components.html',
  styleUrl: './card-proyecto.components.scss',
})
export class CardProyectoComponents {
  /** Project rendered by this card. */
  proyecto = input.required<Proyecto>();
}
