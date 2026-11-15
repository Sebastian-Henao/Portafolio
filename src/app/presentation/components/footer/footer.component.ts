import { Component, input } from '@angular/core';

/** Renders the portfolio footer with its owner's name and current year. */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  /** Name displayed in the copyright notice. */
  nombre = input.required<string>();
  /** Current calendar year displayed in the copyright notice. */
  protected readonly year = new Date().getFullYear();
}
