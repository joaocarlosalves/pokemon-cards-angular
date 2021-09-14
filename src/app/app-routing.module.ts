import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { CardComponent } from './components/cards/card/card.component';
import { SetsComponent } from './components/sets/sets.component';
import { TypesComponent } from './components/types/types.component';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'cards', component: CardListComponent },
  { path: 'card/:id', component: CardComponent },
  { path: 'sets', component: SetsComponent },
  { path: 'types', component: TypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
