import { Component } from '@angular/core';
import { NotificacionProvider } from '../../providers/notificacion/notificacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public notificacionProvider: NotificacionProvider) {
  }

  mostrarNotificacion(){
    this.notificacionProvider.abrirNotificacionSimple("prueba","jose emilio");
  }

}
