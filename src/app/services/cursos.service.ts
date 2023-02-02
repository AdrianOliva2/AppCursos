import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../classes/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[];
  private _$cursos: BehaviorSubject<Curso[]>;

  public constructor() {
    this.cursos = [
      new Curso("Curso1", 5),
      new Curso("Curso2", 10)
    ];
    this._$cursos = new BehaviorSubject([...this.cursos]);
  }

  public getCursos(): Curso[] {
    return [...this.cursos];
  }

  public getCurso(id: number): Curso {
    return this.cursos.filter(curso => curso.getId() == id)[0];
  }

  public removeCurso(id: number): void {
    this.cursos = this.cursos.filter(curso => curso.getId() != id);
    this._$cursos.next([...this.cursos]);
  }

  public addCurso(curso: Curso): void {
    this.cursos.unshift(curso);
    this._$cursos.next([...this.cursos]);
  }

  public $cursos(): Observable<Curso[]> {
    return this._$cursos.asObservable();
  }

}
