import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { InicialPage } from '../inicial/inicial';
import { TabelaPage } from '../tabela/tabela';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicialPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = TabelaPage;

  constructor() {

  }
}

