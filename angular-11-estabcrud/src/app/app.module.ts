import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEstabelecimentoComponent } from './components/add-estabelecimento/add-estabelecimento.component';
import { EstabelecimentoDetailsComponent } from './components/estabelecimento-details/estabelecimento-details.component';
import { EstabelecimentosListComponent } from './components/estabelecimentos-list/estabelecimentos-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddEstabelecimentoComponent,
    EstabelecimentoDetailsComponent,
    EstabelecimentosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
