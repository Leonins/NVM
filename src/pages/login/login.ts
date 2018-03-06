import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import  firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private menu: MenuController,
    private googleplus: GooglePlus,
    private storage: NativeStorage
  ) {
    menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    // firebase.auth().onAuthStateChanged( user => {
    //   if (user){
    //     console.log(user.uid);
    //     this.googleplus.trySilentLogin();
    //   }
    // });
  }

  navigateToHome(){
  	this.navCtrl.setRoot("HomePage");
  }

  // login(){
  //   this.storage.getItem('isLogin').then((val) => {
  //     if(val == 0){
  //       this.loginWithGoogle();
  //     } else {
  //       this.navigateToHome();
  //     }
  //   }).catch ( res => {
  //       this.loginWithGoogle();
  //   });

  // }

  // loginWithGoogle(){
  //   this.googleplus.login({
  //     'webClientId':'358760374079-keln257gqotdqan1690lt7lkl9ins6fi.apps.googleusercontent.com'
  //   }).then(res=>{
  //       alert("LOGIN SUCCESS");
  //       this.storage.setItem('isLogin', 1);
  //       this.navigateToHome();
  //   }).catch( res => {
  //       alert("LOGIN FAIL");
  //   });
  // }

  login(){
    this.googleplus.login({
      'webClientId':'358760374079-keln257gqotdqan1690lt7lkl9ins6fi.apps.googleusercontent.com'
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(success=>{
        this.navigateToHome();
      }).catch(res =>{
        alert("LOGIN FAIL");
      })

    })
  }

}
