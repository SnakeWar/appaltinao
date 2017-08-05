import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-artilharia',
  templateUrl: 'artilharia.html'
})
export class ArtilhariaPage {

artilharia: any;

  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule) {

	this.http.get('http://altinao2017.mayrcon.com.br/api/artilharia.php')
	.map(res => res.json())
	.subscribe(data => {
        this.artilharia = data;
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
}
