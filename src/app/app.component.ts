import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  couisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;
  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
   this.couisines = this.af.database.list('/cuisines');
   this.restaurants = this.af.database.list('/restaurants')
                      .map(restaurants => {
                          console.log('BEFORE MAP', restaurants);
                          restaurants.map(restaurant => {
                            restaurant.featureTypes = [];
                            for (let f in restaurant.features)
                              restaurant.featureTypes.push(this.af.database.object('/features/' + f));
                          });
                          console.log('AFTER MAP', restaurants);
                          return restaurants;
                      });

  }

  add() {
    this.couisines.push({
      name: 'Asian',
      details: '...',
      prueba: {
        descripcion: 'hola'
      }
    });
  }


// Update actualiza el elemento correspondiente
// El elemento queda tal cual como se indica en set, eliminando las cosas no declaradas en el set()
  update() {
    this.af.database.object('/restaurant').update({
      name: 'New Name',
      rating: 5
    });
  }

// Elimina un objeto
  remove() {
    this.af.database.object('/restaurant').remove()
    .then(x => console.log('SUCCESS'))
    .catch(x => console.log('Error'));
  }

}
