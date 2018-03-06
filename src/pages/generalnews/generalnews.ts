import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { GeneralnewsPageService } from '../../services/general-news/general-news.service';
import { general_news } from '../../models/generalnews/generalnews.model';
/**
 * Generated class for the GeneralnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generalnews',
  templateUrl: 'generalnews.html',
})
export class GeneralnewsPage {

  generalnews$ : Observable<general_news[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController,
    private GeneralNews: GeneralnewsPageService)
   {

    menu.enable(true);
  	menu.swipeEnable(true);

    this.generalnews$ = this.GeneralNews
    .getGeneralNews() // DB List
    .snapshotChanges() // Key and Value
    .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralnewsPage');
  }

}
