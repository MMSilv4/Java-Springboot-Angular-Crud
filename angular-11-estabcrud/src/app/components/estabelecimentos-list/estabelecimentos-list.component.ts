import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-estabelecimentos-list',
  templateUrl: './estabelecimentos-list.component.html',
  styleUrls: ['./estabelecimentos-list.component.css']
})
export class EstabelecimentosListComponent implements OnInit {
  estabelecimento?: Estabelecimento[];
  currentEstabelecimento?: Estabelecimento;
  currentIndex = -1;
  nome = '';

  constructor(private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit(): void {
    this.retrieveEstabelecimentos();
  }

  retrieveEstabelecimentos(): void {
    this.estabelecimentoService.getAll()
      .subscribe(
        data => {
          this.estabelecimento = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEstabelecimentos();
    this.currentEstabelecimento = undefined;
    this.currentIndex = -1;
  }

  setActiveEstabelecimento(estabelecimento: Estabelecimento, index: number): void {
    this.currentEstabelecimento = estabelecimento;
    this.currentIndex = index;
  }

  removeAllEstabelecimentos(): void {
    this.estabelecimentoService.deleteAll()
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
    this.estabelecimentoService.findByNome(this.nome)
      .subscribe(
        data => {
          this.estabelecimento = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
