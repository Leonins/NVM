import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';

import { FinesAndPenaltiesService } from '../../services/fines-and-penalties/fines-and-penalties.service';
import { Observable } from 'rxjs/Observable';
import { violation_fines } from '../../models/finesAndPenalties/filesAndPenalties.model';
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-fines-and-penalties',
  templateUrl: 'fines-and-penalties.html',
})
export class FinesAndPenaltiesPage {

  finesPenalties$ : Observable<violation_fines[]>;
  detailPage: any;
  public finesList: Array<any>;
  public loadedFinesList: Array<any>;
  public finesRef: firebase.database.Reference;
  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController,
    private fineAndPenalties: FinesAndPenaltiesService) {

  	  menu.enable(true);
  	  menu.swipeEnable(true);

      this.detailPage = 'FinesAndPenaltiesDetailPage';
      this.finesPenalties$ = this.fineAndPenalties
      .getFinesAndPenalties() // DB List
      .snapshotChanges() // Key and Value
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });

      this.initializeItems();
      this.finesRef = firebase.database().ref('/violations_fines');
      this.finesRef.on('value', finesList => {
        console.log(this.finesRef);
        console.log(finesList.val());
        let fines = [];
        finesList.forEach(finePenalties => {
          console.log(finePenalties.val());
          fines.push(finePenalties.val());
          return false;
        });
        console.log(fines);
        this.finesList = fines;
        this.loadedFinesList = fines;
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinesAndPenaltiesPage');
  }

  initializeItems() {
    this.finesList = this.loadedFinesList;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.finesList = this.finesList.filter((v) => {
      if (v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.finesList.length);
  }
}
