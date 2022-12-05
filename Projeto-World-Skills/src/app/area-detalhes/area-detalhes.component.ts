import { Component, OnInit } from '@angular/core';

export interface Automovel {
  modelo: string;
  preco: number;
  id: number;
}

export interface Locacao {
  automoveis: Automovel[];
  id: number;
}

@Component({
  selector: 'app-area-detalhes',
  templateUrl: './area-detalhes.component.html',
  styleUrls: ['./area-detalhes.component.scss']
})
export class AreaDetalhesComponent implements OnInit {

  automoveis: Automovel[] = [
    {modelo:'modelo 1',preco:10,id:1},
    {modelo:'modelo 2',preco:15,id:2},
    {modelo:'modelo 3',preco:12,id:3},
    {modelo:'modelo 4',preco:11,id:4},
    {modelo:'modelo 5',preco:14,id:5},
    {modelo:'modelo 6',preco:19,id:6}
  ];
  area: Locacao = {automoveis: this.automoveis, id:1};

  constructor() { }

  ngOnInit(): void {

 

  }

}
