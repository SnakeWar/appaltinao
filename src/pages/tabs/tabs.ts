import { Component } from '@angular/core';
import { JogosPage } from '../jogos/jogos';
import { ArtilhariaPage } from '../artilharia/artilharia';
import { InicialPage } from '../inicial/inicial';
import { TabelaPage } from '../tabela/tabela';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicialPage;
  tab2Root = JogosPage;
  tab3Root = ArtilhariaPage;
  tab4Root = TabelaPage;

  constructor() {

  }
}

