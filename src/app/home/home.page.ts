import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  curso: FormControl;
  puntuacion: FormControl;

  constructor() {
    this.curso = new FormControl("", Validators.required);
    this.puntuacion = new FormControl(0, Validators.required);
  }
}
