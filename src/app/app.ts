import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './presentation/components/header/header.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { GetPerfilUsecase } from './core/application/usecases/get-perfil.usecase';

@Component({
  imports: [HeaderComponent, HomeComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly nombre = inject(GetPerfilUsecase).execute().nombreCompleto;
}
