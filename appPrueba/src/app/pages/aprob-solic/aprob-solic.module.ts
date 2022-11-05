import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprobSolicPageRoutingModule } from './aprob-solic-routing.module';

import { AprobSolicPage } from './aprob-solic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprobSolicPageRoutingModule
  ],
  declarations: [AprobSolicPage]
})
export class AprobSolicPageModule {}
