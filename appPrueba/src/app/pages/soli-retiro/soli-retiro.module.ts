
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliRetiroPageRoutingModule } from './soli-retiro-routing.module';

import { SoliRetiroPage } from './soli-retiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoliRetiroPageRoutingModule,
    
  ],
  declarations: [SoliRetiroPage]
})
export class SoliRetiroPageModule {}
