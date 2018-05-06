import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from'angularfire2/firestore'
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


import { Trip } from '../../models/trip.model'; 
import { Profile } from '../../models/profile.model';
import { CreateProfilePage } from '../create-profile/create-profile';

declare var google;

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  trips: Observable<Trip[]>;
  trip: Trip;
  id: string;
  driver: Observable<Profile>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.trips = navParams.get('data');
    this.trip = navParams.get('viaje');
    this.id = navParams.get('viaje').id;
    
  }
  ionViewWillEnter(){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.543629, lng: -4.011239 },
      zoom: 15,
      panControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
    
  }
  ShowTrip(value){
    this.trip.user_id=value.user_id;
    this.driver = this.db.collection('profiles').doc<Profile>(this.trip.user_id).valueChanges();
    this.trip=value;
  }
  bookTrip(){
    if(this.trip.avaiableSeats > 0){
    this.navCtrl.push(CreateProfilePage, {
      data: this.trip
    });
  }
  }
  goBack(){
    this.navCtrl.pop()
  }
}
