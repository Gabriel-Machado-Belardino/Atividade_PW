import { Component, OnInit } from '@angular/core';

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
  media: number = 0;
  data: string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
