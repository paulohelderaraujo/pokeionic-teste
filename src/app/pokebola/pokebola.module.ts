import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule} from "../pokemon/pokemon-routing.module";

import { PokemonPage } from "../pokemon/pokemon.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule
  ],
  declarations: [PokemonPage]
})
export class PokemonPageModule {}
