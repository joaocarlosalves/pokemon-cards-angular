import { Component, OnInit } from '@angular/core';
import { PokeService } from '@app/poke-services.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

  constructor(public pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeService.getTypes().subscribe(data => console.log(data));
  }

  search(value: string) {
    console.log(value);
  }

}
