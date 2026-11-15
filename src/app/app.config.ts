import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PortafolioRepository } from './core/domain/repositories/portafolio.repository';
import { PortafolioLocalRepositoryImpl } from './core/infraestructure/repositories/local-implementation/portafolio-local.repository.impl';

/** Application-wide providers for routing, error handling, and portfolio data. */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: PortafolioRepository, useClass: PortafolioLocalRepositoryImpl },
  ]
};
