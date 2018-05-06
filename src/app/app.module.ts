import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {FIREBASE_CONFIG} from '../app/firebase.credentials'

import { MyApp } from './app.component';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { LandingPage } from '../pages/landing/landing';
import { CreateProfilePage } from '../pages/create-profile/create-profile';

@NgModule({
  declarations: [
    MyApp,
    SearchResultsPage, 
    LandingPage, 
    CreateProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    SearchResultsPage,
    CreateProfilePage,
    LandingPage, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Keyboard
  ]
})
export class AppModule {}
