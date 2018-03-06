import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinesAndPenaltiesDetailPage } from './fines-and-penalties-detail';

@NgModule({
  declarations: [
    FinesAndPenaltiesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FinesAndPenaltiesDetailPage),
  ],
})
export class FinesAndPenaltiesDetailPageModule {}
