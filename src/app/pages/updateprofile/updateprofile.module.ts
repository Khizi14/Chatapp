import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateprofilePageRoutingModule } from './updateprofile-routing.module';

import { UpdateprofilePage } from './updateprofile.page';
import { InputModule } from 'src/app/Components/input/input.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    UpdateprofilePageRoutingModule,
  ],
  declarations: [UpdateprofilePage]
})
export class UpdateprofilePageModule {}
