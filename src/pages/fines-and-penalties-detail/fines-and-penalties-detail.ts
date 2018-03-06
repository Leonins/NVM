import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { violation_fines } from '../../models/finesAndPenalties/filesAndPenalties.model';

@IonicPage()
@Component({
  selector: 'page-fines-and-penalties-detail',
  templateUrl: 'fines-and-penalties-detail.html',
})
export class FinesAndPenaltiesDetailPage {

  finesAndPenalties: violation_fines;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log(this.navParams.get('fines'));
    this.finesAndPenalties = this.navParams.get('fines');
  }

}
