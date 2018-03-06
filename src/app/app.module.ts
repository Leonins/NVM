import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy} from '@ionic-native/location-accuracy';
import { Camera } from '@ionic-native/camera';
import { GooglePlus} from '@ionic-native/google-plus';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geofence } from '@ionic-native/geofence';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocalNotifications } from '@ionic-native/local-notifications';
//import { Gmap} from 'gmap/gmap';

import { AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FinesAndPenaltiesService } from '../services/fines-and-penalties/fines-and-penalties.service';
import { GeneralnewsPageService } from '../services/general-news/general-news.service';
import { roadblockageService } from '../services/road-blockages/road-blockages.service';
import firebase from 'firebase';
import { TrafficRoadSignService } from '../services/geofence/traffic-road-sign.service';

firebase.initializeApp(FIREBASE_CONFIG);

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    LocationAccuracy,
    Camera,
    FinesAndPenaltiesService,
    GooglePlus,
    AndroidPermissions,
    NativeStorage,
    Geofence,
    GeneralnewsPageService,
    roadblockageService,
    TrafficRoadSignService,
    PhonegapLocalNotification,
    Diagnostic,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
