import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

import { Profile } from '../../models/profile.model';
import { Trip } from '../../models/trip.model';
import { LandingPage } from '../landing/landing';

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  profile = {} as Profile;
  trip: Trip;
  id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private db: AngularFirestore) {
       this.trip = navParams.get('data');
       this.id= navParams.get('data').id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProfilePage');
  }
  
  bookTrip(){
    if(this.trip.avaiableSeats > 0){
      this.trip.avaiableSeats = this.trip.avaiableSeats -  1
      this.db.collection('trips').doc(this.id).update(this.trip)
      this.db.collection('trips').doc(this.id).collection('passengers').add({
        passID: this.profile
      })
    }
    this.navCtrl.push(LandingPage)
  }
}
