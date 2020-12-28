import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Profissional } from 'src/app/models/profissional.model';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-profissionals-list',
  templateUrl: './profissionais-list.component.html',
  styleUrls: ['./profissionais-list.component.css']
})
export class ProfissionaisListComponent implements OnInit {

  profissional?: Profissional[];
  currentProfissional?: Profissional;
  currentIndex = -1;
  nome = '';


  constructor(private profissionalService: ProfissionalService) { }

  ngOnInit(): void {
    this.retrieveProfissionais();
  }

  retrieveProfissionais(): void {
    this.profissionalService.getAll()
      .subscribe(
        data => {
          this.profissional = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProfissionais();
    this.currentProfissional = undefined;
    this.currentIndex = -1;
  }

  setActiveProfissional(profissional: Profissional, index: number): void {
    this.currentProfissional = profissional;
    this.currentIndex = index;
  }

  removeAllProfissionais(): void {
    this.profissionalService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        }, 
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.profissionalService.findByNome(this.nome)
      .subscribe(
        data => {
          this.profissional = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
