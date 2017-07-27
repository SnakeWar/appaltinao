import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

artilharia: any;

  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule) {

	this.http.get('http://localhost/newinter2017/api/artilharia.php')
	.map(res => res.json())
	.subscribe(data => {
        this.artilharia = data;
        console.log(data);
    });
  }

}
