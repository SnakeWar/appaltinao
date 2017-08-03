import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { JogosPage } from '../pages/jogos/jogos';
import { ArtilhariaPage } from '../pages/artilharia/artilharia';
import { TabelaPage } from '../pages/tabela/tabela';
import { TabsPage } from '../pages/tabs/tabs';
import { InicialPage } from '../pages/inicial/inicial';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    JogosPage,
    ArtilhariaPage,
    TabelaPage,
    InicialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JogosPage,
    ArtilhariaPage,
    TabelaPage,
    InicialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
