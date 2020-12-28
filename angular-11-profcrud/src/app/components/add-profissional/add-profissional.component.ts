import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/profissional.model';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-add-profissional',
  templateUrl: './add-profissional.component.html',
  styleUrls: ['./add-profissional.component.css']
})
export class AddProfissionalComponent implements OnInit {

  profissional: Profissional = {
    nome: '',
    endereco: '',
    telefone: '',
    celular: '',
    funcao: '',
  };
  submitted = false;

  constructor(private profissionalService: ProfissionalService ) { }

  ngOnInit(): void {
  }

  saveProfissional(): void {
    const data = {
      nome: this.profissional.nome,
      endereco: this.profissional.endereco,
      telefone: this.profissional.telefone,
      celular: this.profissional.celular,
      funcao: this.profissional.funcao
    };

    this.profissionalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        }, 
        error => {
          console.log(error);
        });
  }

  newProfissional(): void {
    this.submitted = false;
    this.profissional = {
      nome: '',
      endereco: '',
      telefone: '',
      celular: '',
      funcao: ''
    };
  }

}
