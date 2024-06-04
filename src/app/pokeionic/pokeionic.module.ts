import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {PokeionicPageRoutingModule} from './pokeionic-routing.module';

import { PokeionicPage } from './pokeionic.page';
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeionicPageRoutingModule,
    PipesModule
  ],
  declarations: [PokeionicPage]
})
export class PokeionicPageModule {}

