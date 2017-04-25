import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';

export const firebaseCponfig = {
    apiKey: 'AIzaSyBLaoeQ7fjMcnnlwZ3uOQ_t-SeqwCDYk8k',
    authDomain: 'ng4-firegase.firebaseapp.com',
    databaseURL: 'https://ng4-firegase.firebaseio.com',
    projectId: 'ng4-firegase',
    storageBucket: 'ng4-firegase.appspot.com',
    messagingSenderId: '937101142636'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseCponfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
