import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html'
})
export class InicialPage {
	
  jogadoresa: any;
  jogadoresb: any;
  jogadoresc: any;

  timea: any;
  timeb: any;
  timec: any;

  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule) {
	
	this.http.get('http://altinao2017.mayrcon.com.br/api/time_a.php')
	.map(res => res.json())
	.subscribe(data => {
        this.jogadoresa = data;
        console.log(data);
    });
  this.http.get('http://altinao2017.mayrcon.com.br/api/time_b.php')
	.map(res => res.json())
	.subscribe(data => {
        this.jogadoresb = data;
        console.log(data);
    });
  this.http.get('http://altinao2017.mayrcon.com.br/api/time_c.php')
  .map(res => res.json())
  .subscribe(data => {
        this.jogadoresc = data;
        console.log(data);
    });

  this.http.get('http://altinao2017.mayrcon.com.br/api/nome_time_a.php')
  .map(res => res.json())
  .subscribe(data => {
        this.timea = data;
        console.log(data);
    });
  this.http.get('http://altinao2017.mayrcon.com.br/api/nome_time_b.php')
  .map(res => res.json())
  .subscribe(data => {
        this.timeb = data;
        console.log(data);
    });
  this.http.get('http://altinao2017.mayrcon.com.br/api/nome_time_c.php')
  .map(res => res.json())
  .subscribe(data => {
        this.timec = data;
        console.log(data);
    });
  }

}
