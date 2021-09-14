import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PokeService } from '@app/poke-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: any = [];
  id: any;
  error = false;
  typeImg = '';
  cardImage = '';
  subtypes: any = [];

  constructor(
    private route: ActivatedRoute,
    public pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.pokeService.getCard(this.id)
    .subscribe(card => {
      if(card && !card.error) {
        this.card = card.data;
        this.typeImg = `assets/images/symbols/${ this.card['types'][0].toLowerCase() }.png`;
        this.cardImage = this.card['images']['large'];

        if(this.card['subtypes'][0] !== '') {
          this.subtypes.push(this.card['subtypes'][0]);
          if(this.card['subtypes'][1]) this.subtypes.push(this.card['subtypes'][1]);
          if(this.card['subtypes'][2]) this.subtypes.push(this.card['subtypes'][2]);
        }

        console.log(this.card);
      } else {
        this.error = true;
        console.log('card.error.code');
        console.log(card.error.code);
      }
    });
  }

}
