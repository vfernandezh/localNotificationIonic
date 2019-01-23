import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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


  abrirNotificacion() {
    this.localN.schedule({

      id: 1,
      title: 'Atencion',
      text: 'todo va bien',
      //at: new Date(new Date().getTime() + 5 *1000),
      data: { mydata: 'mi mensaje es este' }

    });
  }

}
