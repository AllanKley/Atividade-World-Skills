import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';

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
  areaId: number = 1;
  locacoes: Locacao[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
 
    this.areaId = Number(routeParams.get('areaId'));
    this.CarregarArea(this.areaId);

  }

  CarregarArea(areaId:number) {
    var config = {
      method: 'get',
      url: 'https://localhost:7206/locacao/buscar/' + areaId,
    };
    var instance = this;
    axios(config)
      .then(function (response) {
        instance.locacoes = response.data;
        console.log(instance.locacoes);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CarregarAutomoveis(automovelId:number){
    var config = {
      method: 'get',
      url: 'https://localhost:7206/automovel/buscar/' + automovelId,
    };
    var instance = this;
    axios(config)
      .then(function (response) {
        
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
