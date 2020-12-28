import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfissionalComponent } from './components/add-profissional/add-profissional.component';
import { ProfissionalDetailsComponent } from './components/profissional-details/profissional-details.component';
import { ProfissionaisListComponent } from './components/profissionais-list/profissionais-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'profissional', pathMatch: 'full' },
  { path: 'profissional', component: ProfissionaisListComponent },
  { path: 'profissional/:id', component: ProfissionalDetailsComponent },
  { path: 'addProfissional', component: AddProfissionalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
