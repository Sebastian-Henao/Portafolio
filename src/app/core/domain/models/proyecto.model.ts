/** Describes a project presented in the portfolio. */
export interface Proyecto {
    /** Stable identifier used to track the project in a list. */
    id: number;
    /** Project title. */
    nombre: string;
    /** Summary of the project and its purpose. */
    descripcion: string;
    /** Technologies used to build the project. */
    tecnologias: string[];
    /** Main capabilities or contributions included in the project. */
    funciones: string[];
    /** Source-code repository URL. */
    repositorioUrl: string;
    /** URL where the project can be viewed or used. */
    despliegueUrl: string;
}