// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the RoadblockagePage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-roadblockage',
//   templateUrl: 'roadblockage.html',
// })
// export class RoadblockagePage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { roadblockageService } from '../../services/road-blockages/road-blockages.service';
import { road_block } from '../../models/roadblockages/roadblockages.model';

/**
 * Generated class for the RoadblockagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roadblockage',
  templateUrl: 'roadblockage.html',
})
export class RoadblockagePage {
  Roadblock$: Observable<road_block[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController, 
    private RoadBlockNews: roadblockageService) {
      menu.enable(true);
      menu.swipeEnable(true);

      this.Roadblock$ = this.RoadBlockNews
      .getRoadBlockNews () // DB List
      .snapshotChanges() // Key and Value
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoadblockagePage');
  }

}
