# Portafolio personal

Aplicación web de portafolio personal construida con Angular. Presenta el perfil profesional, las habilidades y tecnologías, y una colección de proyectos con enlaces a sus repositorios y despliegues.

Estudiante: Sebastian Henao Gamboa

## Contenido

- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Datos del portafolio](#datos-del-portafolio)

## Tecnologías usadas

- Angular 20 y TypeScript
- Bootstrap 5 y Bootstrap Icons
- Jest para pruebas unitarias
- Compodoc para la documentación técnica

## Estructura del proyecto

```text
src/app/
├── core/
│   ├── application/usecases/       # Casos de uso para consultar el perfil y los proyectos
│   ├── domain/
│   │   ├── models/                 # Modelos Perfil y Proyecto
│   │   └── repositories/           # Contrato del repositorio del portafolio
│   └── infraestructure/
│       └── repositories/           # Implementación local de los datos
└── presentation/
    ├── components/                 # Encabezado, pie de página y tarjeta de proyecto
    └── pages/home/                 # Página principal del portafolio
```

La aplicación usa componentes standalone. La configuración global, incluyendo la implementación concreta del repositorio, se encuentra en `src/app/app.config.ts`.

## Datos del portafolio

El perfil y los proyectos se mantienen actualmente como datos locales en `PortafolioLocalRepositoryImpl`. Para actualizar la información mostrada, modifica su implementación en:

`src/app/core/infraestructure/repositories/local-implementation/portafolio-local.repository.impl.ts`

Los tipos de datos están definidos en `src/app/core/domain/models/`.

## Nota sobre los proyectos

Muchos de los proyectos mostrados no son desarrollador de forma individual, fueron desarrollados en grupo (esto se puede ver en los contribuidores de cada proyecto).
