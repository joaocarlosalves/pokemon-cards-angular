import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PokeService } from '@app/poke-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card = [];
  id: any;

  constructor(
    private route: ActivatedRoute,
    public pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.pokeService.getCard(this.id).subscribe(card => {
      this.card = card.data;
      console.log(this.card)
    });
  }

}
