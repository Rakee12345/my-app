import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.less']
})
export class PokemonComponent {

  pokemans:any=[]
constructor(private _pokemonService:PokemonService){
  _pokemonService.get().subscribe(

    (data: any) => {
     this.pokemans = data
    },
    (err: any) => {
      alert("error occurred")
    }
  )
}
}
