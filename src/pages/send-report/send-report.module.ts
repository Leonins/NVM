import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendReportPage } from './send-report';

@NgModule({
  declarations: [
    SendReportPage,
  ],
  imports: [
    IonicPageModule.forChild(SendReportPage),
  ],
})
export class SendReportPageModule {}
