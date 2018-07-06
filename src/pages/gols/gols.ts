import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gols',
  templateUrl: 'gols.html'
})
export class GolsPage {


gols: any;

  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule, public modalCtrl: ModalController, params: NavParams) {
	let link = 'http://api.mayrcon.com.br/api/gols.php';
        let postData = params.get('userId');
        console.log('UserId', params.get('userId'));
        console.log(postData);
        this.http.post(link,{id: postData})
        .subscribe(data => {
          this.gols = JSON.parse(data['_body']); //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
          console.log(this.gols);
        }, error => {

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

}
