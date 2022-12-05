import { Component, OnInit } from '@angular/core';

export interface Automovel {
  modelo: string;
  concessionarias: Concessionaria[];
  id: number;
}

export interface Concessionaria {
  nome: string;
  id: number;
}

export interface Cliente{
  id: number;
  nome: string;
}

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  
  concessionarias: Concessionaria[] = [
    {nome: 'concessionaria 1', id:1},
    {nome: 'concessionaria 2', id:2},
    {nome: 'concessionaria 3', id:3},
    {nome: 'concessionaria 4', id:4},
  ];

  automovel: Automovel = {modelo:'modelo 6',concessionarias: this.concessionarias,id:6};

  clientes: Cliente[] = [
    {nome: 'cliente 1', id:1},
    {nome: 'cliente 2', id:2},
    {nome: 'cliente 3', id:3},
    {nome: 'cliente 4', id:4},
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
