import { Component, input } from '@angular/core';
import { Proyecto } from '../../../core/domain/models/proyecto.model';

@Component({
  selector: 'app-card-proyecto',
  templateUrl: './card-proyecto.components.html',
  styleUrl: './card-proyecto.components.scss',
})
export class CardProyectoComponents {
  proyecto = input.required<Proyecto>();
}
