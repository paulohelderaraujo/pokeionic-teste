import { PokeapiService } from "../apis/pokeapi.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokeionic',
  templateUrl: './pokeionic.page.html',
  styleUrls: ['./pokeionic.page.scss'],
})
export class PokeionicPage implements OnInit {

  pokeionic: any = [];
  query: string | undefined;

  /**
   *
   * @param pokeapiService
   * @param router
   */
  constructor(public pokeapiService: PokeapiService,
              public router: Router) {

    this.search();

  }

  /**
   *
   */
  search() {

    this.pokeapiService.getPokeionic().then((data: any) => {
      this.pokeionic = data.pokemon_entries;
    });

  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   *
   * @param pokemonId
   */
  seeMore(pokemonId: string) {

    this.router.navigate([`pokemon/${pokemonId}`]);

  }

}

