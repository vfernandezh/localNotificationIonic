import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NavController, AlertController, Platform } from 'ionic-angular';

/*
  Generated class for the NotificacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificacionProvider {

  private notificacion:LocalNotifications;
  
  constructor(public navCtrl: NavController, public alertC: AlertController, private ptl: Platform, private localN: LocalNotifications) {
    this.ptl.ready().then((rdy) => {

      this.localN.on('click').subscribe(notification => {

        let json = JSON.parse(notification.data);
        let alert = this.alertC.create({

          title: notification.title,
          subTitle: json.mydata

        });

        alert.present();

      });
    });
  }

  private abrirNotificacionSimple(titulo:string, texto:string) {
    var nSimple = {
      id: 1,
      title: titulo,
      text: texto,
      //at: new Date(new Date().getTime() + 5 *1000),
      data: { mydata: 'mi mensaje es este' }
      .
    }
    this.notificacion.schedule(nSimple);
  }
}
