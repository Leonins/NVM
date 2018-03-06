import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform, App, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';
import  firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:string= "LoginPage";
  userProfile: any = null;
  pages: Array<{title: string, component: any, icon: any}>;
  

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    app: App,
    menu: MenuController,
    private googleplus: GooglePlus,
    public zone: NgZone
  ) {
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
        this.googleplus.trySilentLogin();
      } else {
          this.userProfile = null;
      }
    });
    this.initializeApp();
    this.zone.run(() => {
      this.checkLogin();
    });
    menu.enable(true);
    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'home' },
      { title: 'General News', component: 'GeneralnewsPage', icon: 'paper'},
      { title: 'Road Blockages', component: 'RoadblockagePage', icon: 'paper'},
      { title: 'List of Fines and Penalties', component: 'FinesAndPenaltiesPage', icon: 'clipboard'},
      { title: 'Send Report', component: 'SendReportPage', icon: 'briefcase' },
      { title: 'Logout', component: 'LoginPage', icon: 'power'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async checkLogin(){
    try {
      let status = await this.googleplus.trySilentLogin({});
      console.log("User Found");
      this.rootPage = 'HomePage';
    } catch (error) {
      console.log("User Not Found");
      this.rootPage = "LoginPage";
    }
  }
 openHomePage(){
   this.nav.setRoot("HomePage");
 }
 openLoginPage(){
   this.googleplus.logout();
   this.nav.setRoot("LoginPage");
 }

 openGeneralNewsPage(){
  this.nav.setRoot("GeneralnewsPage");
}

 openFinesAndPenaltiesPage(){
   this.nav.setRoot("FinesAndPenaltiesPage");
 }

 openSendReportPage(){
    this.nav.setRoot("SendReportPage");
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component === 'LoginPage'){
      this.googleplus.logout();
      this.nav.setRoot(page.component);
    }else{
      this.nav.setRoot(page.component);
    }

  }
}
