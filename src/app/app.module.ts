import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { CardComponent } from './components/cards/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    CardListComponent,
    CardComponent,
    LoadingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
