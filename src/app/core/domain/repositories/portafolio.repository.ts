import { Perfil } from "../models/perfil.model";
import { Proyecto } from "../models/proyecto.model";

/** Contract for providing profile and project data to the application. */
export abstract class PortafolioRepository {
    /** Retrieves the portfolio owner's profile. */
    abstract getPerfil(): Perfil;
    /** Retrieves the projects displayed in the portfolio. */
    abstract getProyectos(): Proyecto[];
}