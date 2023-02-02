import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from '../classes/curso';
import { CursosService } from '../services/cursos.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cursos?: Curso[];
  curso: FormControl;
  puntuacion: FormControl;
  form: FormGroup;
  imageSrc?: string = "";

  constructor(private cursosService: CursosService, private router: Router) {
    cursosService.$cursos().subscribe(cursos => this.cursos = cursos);
    this.curso = new FormControl("", Validators.required);
    this.puntuacion = new FormControl(0, Validators.required);
    this.form = new FormGroup({
      curso: this.curso,
      puntuacion: this.puntuacion
    })
  }

  public addCurso() {
    this.cursosService.addCurso(new Curso(this.curso.value, parseInt(this.puntuacion.value), this.imageSrc));
    this.curso.setValue("");
    this.puntuacion.setValue(0);
    this.form.reset();
    this.imageSrc = "";
  }

  public viewDetails(idCurso: number) {
    this.router.navigate(['/details', idCurso])
  }

  public async takePicture () {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    this.imageSrc = image.webPath;
  };

}
