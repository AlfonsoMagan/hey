import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import {SearchResultsPage} from '../search-results/search-results';

import { Trip } from '../../models/trip.model';
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  trip = {} as Trip;

  private itemsCollection: AngularFirestoreCollection<Trip>;
  trips: Observable<Trip[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFirestore) {
this.trip.origin = "Universidad"
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  SearchResults(value){
    this.trip.destination = value;
    this.itemsCollection = this.db.collection('trips', ref => ref.where('origin', '==', this.trip.origin)
                                                      .where('destination', '==', this.trip.destination)
                                                      .where('avaiableSeats', '>', 0))
                                                    
    
    this.trips = this.itemsCollection.snapshotChanges().map( actions => {
      return actions.map(a => {
        console.log(a.payload.doc.data())
        const data = a.payload.doc.data() as Trip;
        const id = a.payload.doc.id;
        return {id, ...data} 
      })
    })
    this.trip.user_id= " ";
    this.trip.origin= " ";
    this.trip.destination= " ";
    this.trip.departureDate= null;
    this.trip.departureTime= null;
    this.trip.totalSeats= null,
    this.trip.avaiableSeats= null;
    this.trip.price= null;
    //Add recent searches 
    //this.db.collection('users')
    this.navCtrl.push(SearchResultsPage, {
      data: this.trips,
      viaje: this.trip,
      viaje_id: this.trip.user_id
    });
  }

}
