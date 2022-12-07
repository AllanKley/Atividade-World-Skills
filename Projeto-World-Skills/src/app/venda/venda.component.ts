import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';

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

  clientes: Cliente[] = [];
  areaId: number = 1;
  automovelId: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.areaId = Number(routeParams.get('areaId'));
    this.automovelId = Number(routeParams.get('automovelId'));

    this.CarregarClientes();
  }

  CarregarClientes(){
    var config = {
      method: 'get',
      url: 'https://localhost:7206/cliente/buscarTodos',
    };
    var instance = this;
    axios(config)
      .then(function (response) {

        instance.clientes = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
}
