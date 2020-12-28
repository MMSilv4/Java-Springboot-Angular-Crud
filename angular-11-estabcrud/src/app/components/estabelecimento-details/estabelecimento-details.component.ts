import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';


@Component({
  selector: 'app-estabelecimento-details',
  templateUrl: './estabelecimento-details.component.html',
  styleUrls: ['./estabelecimento-details.component.css']
})
export class EstabelecimentoDetailsComponent implements OnInit {
  currentEstabelecimento: Estabelecimento = {
    nome: '',
    endereco: '',
    telefone: '',
  };
  message = '';

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEstabelecimento(this.route.snapshot.params.id);
  }

  getEstabelecimento(id: String): void{
    this.estabelecimentoService.get(id)
      .subscribe(
        data => {
          this.currentEstabelecimento = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateEstabelecimento(): void {
    this.message = '';
    const data = {
      nome: this.currentEstabelecimento.nome,
      endereco: this.currentEstabelecimento.endereco,
      telefone: this.currentEstabelecimento.telefone
    }
    this.estabelecimentoService.update(this.currentEstabelecimento.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Estabelecimento atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEstabelecimento(): void{
    this.estabelecimentoService.delete(this.currentEstabelecimento.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/estabelecimentos']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
