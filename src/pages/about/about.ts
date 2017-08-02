import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

jogos: any;

  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule) {
	this.http.get('http://altinao2017.mayrcon.com.br/api/jogos.php')
	.map(res => res.json())
	.subscribe(data => {
        this.jogos = data;
        console.log(data);
    });
  }

}
