import { Perfil } from "../models/perfil.model";
import { Proyecto } from "../models/proyecto.model";

export abstract class PortafolioRepository {
    abstract getPerfil(): Perfil;
    abstract getProyectos(): Proyecto[];
}