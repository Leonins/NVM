import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinesAndPenaltiesPage } from './fines-and-penalties';

@NgModule({
  declarations: [
    FinesAndPenaltiesPage,
  ],
  imports: [
    IonicPageModule.forChild(FinesAndPenaltiesPage),
  ],
})
export class FinesAndPenaltiesPageModule {}
