import { Component, OnInit } from '@angular/core';
import { PokeService } from '@app/poke-services.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnInit {
  cards = [];
  pages: any;
  currentPage = 1;

  constructor(public pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeService.getAllCards(1).subscribe(cards => {
      this.pages = new Array(parseInt(Math.round(cards.totalCount / cards.pageSize).toString()));
      this.cards = cards.data;
      console.log(this.cards);
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.pokeService.getAllCards(page).subscribe(cards => this.cards = cards.data);
  }

}
