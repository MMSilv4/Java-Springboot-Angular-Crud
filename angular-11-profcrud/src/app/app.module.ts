import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProfissionalComponent } from './components/add-profissional/add-profissional.component';
import { ProfissionalDetailsComponent } from './components/profissional-details/profissional-details.component';
import { ProfissionaisListComponent } from './components/profissionais-list/profissionais-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfissionalService } from './services/profissional.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProfissionalComponent,
    ProfissionalDetailsComponent,
    ProfissionaisListComponent
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
