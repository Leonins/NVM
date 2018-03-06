import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import firebase from 'firebase';
import {ToastController} from 'ionic-angular';
/**
 * Generated class for the SendReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-report',
  templateUrl: 'send-report.html',
})
export class SendReportPage {
  public photos: any;
  public base64Image: string;
  public userProfile: any;

  private userUID: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendReportPage');
  }

  ngOnInit() {
    this.photos = [];


  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete this photo?',
      message: '',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();

  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      // Handle error
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Report sent successfully',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  uploadPhoto() {

    firebase.auth().onAuthStateChanged(user => {

      if (user) {
        this.userProfile = user;

        this.userUID = user.uid;

        let storageRef = firebase.storage().ref();

        // Create a timestamp as filename
        let newDirectory = this.userUID;
        const filename = Math.floor(Date.now() / 1000);

        // Create a reference to 'images/todays-date.jpg'

        let imageRef = storageRef.child('Street_Reports/' + this.userUID + '/' + filename + '.jpg');

        imageRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
          // Do something here when the data is succesfully uploaded!
          // this.toast.show(`Successfully sent a report`, '3000', 'bottom').subscribe(
          //   toast => {
          //     console.log(toast);
          //   }
          // );
         this.presentToast();
         console.log(this.photos.length);
          console.log("TIMESTAMP TO READABLE DATE(TOLOCALESTRING)  :"+(Date.now() * 1000).toLocaleString() );
          
          console.log("TIMESTAMP TO READABLE DATE(TOLOCALESTRING)  :"+(Date.now() * 1000) );
        });
      }
    });

  }


}
