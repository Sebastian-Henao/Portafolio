import { Injectable } from '@angular/core';
import { PortafolioRepository } from '../../../domain/repositories/portafolio.repository';
import { Perfil } from '../../../domain/models/perfil.model';
import { Proyecto } from '../../../domain/models/proyecto.model';

/** Supplies portfolio content from the local, in-code data set. */
@Injectable()
export class PortafolioLocalRepositoryImpl implements PortafolioRepository{
  /** Returns the portfolio owner's profile and skills. */
  getPerfil(): Perfil {
    return {
      nombreCompleto: 'Sebastian Henao Gamboa',
      titulo: 'Estudiante de Ingeniería de Sistemas',
      sobreMi: ' ',
      githubUrl: `https://github.com/Sebastian-Henao`,
      habilidades: ['Trabajo en equipo', 'Arquitectura de software', 'Desarrollo web', 'Desarrollo movil', 'Pruebas unitarias'],
      lenguajes: ['TypeScript', 'Dart', 'Java', 'C', 'Pyton'],
      tecnologias: ['Angular', 'Flutter', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Firebase', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'Jira', 'Postman'],
    };
  }

  /** Returns the projects and their repository and deployment links. */
  getProyectos(): Proyecto[] {
    return [
      {
        id: 1,
        nombre: 'Portafolio Personal',
        descripcion: 'Portafolio personal desarrollado con Angular y TypeScript, que muestra mis habilidades, proyectos y experiencia profesional.',
        tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        funciones: ['Desarrollo de la interfaz de usuario', 'Implementación de la lógica de negocio', 'Integración con servicios externos'],
        repositorioUrl: `https://github.com/Sebastian-Henao/Portafolio`,
        despliegueUrl: `https://sebastian-henao.github.io/Portafolio/`
      },
      {
        id: 2,
        nombre: 'Libreria publicada en npm + showcase',
        descripcion: 'Libreria publicado en npm que permite gestionar el almacenamiento tanto en Local Storage con en Cache Storage, ademas de un showcase que permite ver el funcionamiento de la libreria.',
        tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS', 'npm'],
        funciones: ['Desarrollo de la libreria', 'Desarrollo del showcase', 'Publicación en npm'],
        repositorioUrl: `https://github.com/Sebastian-Henao/Proyecto-Storage-Manager`,
        despliegueUrl: `https://sebastian-henao.github.io/Proyecto-Storage-Manager/`
      },
      {
        id: 3,
        nombre: 'Despliegue de aplicacion con Hash Location',
        descripcion: 'Despliegue de aplicacion con Hash Location, que permite desplegar una aplicacion Angular en GitHub Pages sin necesidad de configurar el servidor.',
        tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS', 'GitHub Pages'],
        funciones: ['Configuración del despliegue', 'Implementación de la lógica de navegación'],
        repositorioUrl: `https://github.com/Sebastian-Henao/Laboratorio-Hash-Location`,
        despliegueUrl: `https://sebastian-henao.github.io/Laboratorio-Hash-Location/`
      },
      {
        id: 4,
        nombre: 'Aplicacion usando arquitectura modular',
        descripcion: 'Aplicacion desarrollada con Angular y TypeScript, que utiliza una arquitectura modular para organizar el código y facilitar el mantenimiento, existen 5 modulos: Personajes Marvel Rivals, Catalago de videojuegos, Usuarios, Productos y Juegos',
        tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        funciones: ['Desarrollo de la interfaz de usuario', 'Implementación de la lógica de negocio', 'Arquitectura modular'],
        repositorioUrl: `https://github.com/Sebastian-Henao/taller-2-modularidad`,
        despliegueUrl: `https://sebastian-henao.github.io/taller-2-modularidad/`
      },
      {
        id: 5,
        nombre: 'Aplicacion usando Clean Architecture',
        descripcion: 'Aplicacion desarrollada con Angular y TypeScript, que utiliza una arquitectura limpia para organizar el código y facilitar el mantenimiento, existen 5 modulos: Usuarios, Productos, Junglers LoL, Musica y Personajes; el proyecto puede recibir datos locales, desde NodeJS y Spring Boot, se logran cambiar solo comentando y descomentando, en la aplicacion actual funciona mediante data local',
        tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS', 'NodeJS', 'Spring Boot'],
        funciones: ['Desarrollo de la interfaz de usuario', 'Implementación de la lógica de negocio', 'Arquitectura limpia', 'Integración con servicios externos'],
        repositorioUrl: `https://github.com/Sebastian-Henao/Taller6-Uceva-Angular-Taller-Clean-Architecture`,
        despliegueUrl: `https://sebastian-henao.github.io/Taller6-Uceva-Angular-Taller-Clean-Architecture/`
      }
    ]
  }
}
