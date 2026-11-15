import { Component, input } from '@angular/core';

/** Renders the portfolio brand and primary section links. */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /** Name displayed as the portfolio brand. */
  nombre = input.required<string>();
}
