import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Curso } from '../classes/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public curso?: Curso

  constructor(private router: Router, private cursosService: CursosService, private route: ActivatedRoute, private alertController: AlertController) {
    route.params.subscribe(params => this.curso = cursosService.getCurso(params['id']));
  }

  ngOnInit() {
  }

  public async removeCurso() {
    const alert = await this.alertController.create({
      header: 'Eliminar curso',
      subHeader: `Vas a eliminar el curso ${this.curso?.getId()}`,
      message: '¿Estás seguro?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            if (this.curso != null) {
              this.cursosService.removeCurso(this.curso?.getId());
              this.router.navigate(['/home']);
            }
          },
        }
      ]
    });

    await alert.present();
  }

}
