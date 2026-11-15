/** Profile information shown on the portfolio home page. */
export interface Perfil {
    /** Person's full name. */
    nombreCompleto: string;
    /** Current professional or academic title. */
    titulo: string;
    /** Short professional biography. */
    sobreMi: string;
    /** Link to the person's GitHub profile. */
    githubUrl: string;
    /** Professional and interpersonal skills. */
    habilidades: string[];
    /** Programming languages the person uses. */
    lenguajes: string[];
    /** Frameworks, platforms, and tools the person uses. */
    tecnologias: string[];
}