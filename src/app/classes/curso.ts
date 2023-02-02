export class Curso {

    private static totalId: number = 0;
    private id: number;
    private curso: string;
    private puntuacion: number;
    private imgSrc?: string;

    public constructor(curso: string, puntuacion: number, imgSrc?: string) {
        this.curso = curso;
        this.puntuacion = puntuacion;
        Curso.totalId++;
        this.id = Curso.totalId;
        this.imgSrc = imgSrc;
    }

    public getId(): number {
        return this.id;
    }

    public getCurso(): string {
        return this.curso;
    }

    public setCurso(curso: string): void {
        this.curso = curso;
    }

    public getPuntuacion(): number {
        return this.puntuacion;
    }

    public setPuntuacion(puntuacion: number): void {
        this.puntuacion = puntuacion;
    }

    public getImgSrc(): string | undefined {
        return this.imgSrc;
    }

    public setImgSrc(imgSrc?: string): void {
        this.imgSrc = imgSrc;
    }

}
