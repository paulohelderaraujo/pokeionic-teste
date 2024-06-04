import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pokeionic',
    loadChildren: () => import('./pokeionic/pokeionic.module').then( m => m.PokeionicPageModule)
  },
  {
    path: 'pokemon/:id',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'pokebola',
    loadChildren: () => import('./pokebola/pokebola.module').then( m => m.PokebolaPageModule)
  },
  {
    path: 'pokeionic',
    loadChildren: () => import('./pokeionic/pokeionic.module').then( m => m.PokeionicPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'pokebola',
    loadChildren: () => import('./pokebola/pokebola.module').then( m => m.PokebolaPageModule)
  },
  {
    path: 'pokeapi',
    loadChildren: () => import('./services/apis/pokeapi/pokeapi.module').then( m => m.PokeapiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
