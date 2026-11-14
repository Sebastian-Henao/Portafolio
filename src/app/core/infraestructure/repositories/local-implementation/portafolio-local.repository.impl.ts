import { Injectable } from '@angular/core';
import { PortafolioRepository } from '../../../domain/repositories/portafolio.repository';
import { Perfil } from '../../../domain/models/perfil.model';
import { Proyecto } from '../../../domain/models/proyecto.model';

@Injectable()
export class PortafolioLocalRepositoryImpl implements PortafolioRepository{
  getPerfil(): Perfil {
    return {
      nombreCompleto: 'Sebastian Henao Gamboa',
      titulo: 'Estudiante de Ingeniería de Sistemas',
      sobreMi: ' ',
      githubUrl: `https://github.com/`,
      habilidades: ['Trabajo en equipo', 'Arquitectura de software', 'Desarrollo web', 'Desarrollo movil', 'Pruebas unitarias'],
      lenguajes: ['TypeScript', 'Dart', 'Java', 'C', 'Pyton'],
      tecnologias: ['Angular', 'Flutter', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Firebase', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'Jira', 'Postman'],
    };
  }

  getProyectos(): Proyecto[] {
    return [
      {
        id: 1,
        nombre: 'Portafolio Personal',
        descripcion: 'Portafolio personal desarrollado con Angular y TypeScript, que muestra mis habilidades, proyectos y experiencia profesional.',
        tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        funciones: ['Desarrollo de la interfaz de usuario', 'Implementación de la lógica de negocio', 'Integración con servicios externos'],
        repositorioUrl: `https://github.com/`,
        despliegueUrl: `https://sebastianhenao.github.io/`
      }
    ]
  }
}
