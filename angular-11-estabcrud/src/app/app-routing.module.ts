import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelecimentosListComponent } from './components/estabelecimentos-list/estabelecimentos-list.component';
import { EstabelecimentoDetailsComponent } from './components/estabelecimento-details/estabelecimento-details.component';
import { AddEstabelecimentoComponent } from './components/add-estabelecimento/add-estabelecimento.component'

const routes: Routes = [
    { path: '', redirectTo: 'estabelecimento', pathMatch: 'full' },
    { path: 'estabelecimento', component: EstabelecimentosListComponent },
    { path: 'estabelecimento/:id', component: EstabelecimentoDetailsComponent },
    { path: 'addEstabelecimento', component: AddEstabelecimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
