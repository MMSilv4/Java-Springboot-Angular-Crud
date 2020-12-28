import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/models/profissional.model';

@Component({
  selector: 'app-profissional-details',
  templateUrl: './profissional-details.component.html',
  styleUrls: ['./profissional-details.component.css']
})
export class ProfissionalDetailsComponent implements OnInit {

  currentProfissional: Profissional = {
    nome: '',
    endereco: '',
    telefone: '',
    celular: '',
    funcao: ''
  };
  message = '';

  constructor(private profissionalService: ProfissionalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProfissional(this.route.snapshot.params.id);
  }

  getProfissional(id: String): void{
    this.profissionalService.get(id)
      .subscribe(
        data => {
          this.currentProfissional = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProfissional(): void {
        this.profissionalService.update(this.currentProfissional.id, this.currentProfissional)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Profissional atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProfissional(): void{
    this.profissionalService.delete(this.currentProfissional.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/profissional']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
