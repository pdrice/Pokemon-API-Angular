import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
