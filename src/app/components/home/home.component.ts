import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //codigoRMA - numérico, nome - string, nota1, nota2, nota3, nota4 e media - numérico, data e uma imagem
  codigoRMA: number = 0;
  nome: string = '';
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  buttonPressed: boolean = false;

  outRMA: number = 0;
  outNome: string = '';
  outNota1: number = 0;
  outNota2: number = 0;
  outNota3: number = 0;
  outNota4: number = 0;
  outMedia: number = 0;
  outData: string = '';
  aprovado: string = 'assets/Aprovado.jpg'
  reprovado: string = 'assets/Reprovado.jpg'



  calcMed(){
    this.buttonPressed = true;
    let date = new Date();
    this.outData = date.toString();
    this.outMedia = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;

    this.outRMA = this.codigoRMA;
    this.outNome = this.nome;
    this.outNota1 = this.nota1;
    this.outNota2 = this.nota2;
    this.outNota3 = this.nota3;
    this.outNota4 = this.nota4;

  }
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
