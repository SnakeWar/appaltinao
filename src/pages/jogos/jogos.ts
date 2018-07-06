import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { ModalController } from 'ionic-angular';
import { GolsPage } from '../gols/gols';

@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html'
})
export class JogosPage {

jogos: any;
id_jogo: any;

  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule, public modalCtrl: ModalController) {
	this.http.get('http://api.mayrcon.com.br/api/jogos.php')
	.map(res => res.json())
	.subscribe(data => {
        this.jogos = data;
        console.log(data);
    });
  }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
    /*showGoals(){
      let link = 'http://altinao2017.mayrcon.com.br/api/gols.php';
        let postData;
        console.log(postData)
        this.http.post(link, postData)
        .subscribe(data => {
          this.gols = data; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
        
      
        });
    }*/
    presentProfileModal(id_jogo) {

      console.log('ID JOGO: ' + id_jogo);
   let profileModal = this.modalCtrl.create(GolsPage, { userId: id_jogo });
   profileModal.present();
 }

}
