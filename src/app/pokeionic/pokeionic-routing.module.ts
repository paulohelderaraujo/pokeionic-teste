import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeionicPage } from './pokeionic.page';

const routes: Routes = [
  {
    path: '',
    component: PokeionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeionicPageRoutingModule {}
