import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.dataService.getPokemon(12, this.page + 0).subscribe((res: any) => {
      this.totalPokemons = res.count;
      res.results.forEach((result) => {
        this.dataService
          .getMoreData(result.name)
          .subscribe((uniqueRes: any) => {
            this.pokemons.push(uniqueRes);
            console.log(this.pokemons);
          });
      });
    });
  }
}
