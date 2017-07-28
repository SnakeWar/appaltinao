import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-tabela',
  templateUrl: 'tabela.html'
})
export class TabelaPage {
tabela: any;
  constructor(public navCtrl: NavController, public http: Http, public provider: HttpModule) {
		this.http.get('http://localhost/newinter2017/api/tabela.php')
			.map(res => res.json())
			.subscribe(data => {
		        this.tabela = data;
		        console.log(data);
		});
  }

}
