import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';

export interface Automovel {
  modelo: string;
  concessionarias: Concessionaria[];
  id: number;
}

export interface Concessionaria {
  column1: string;
  column2: number;
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
  
  concessionarias: Concessionaria[] = [];

  concessionariasId: number[] = [];

  automovel: Automovel = {modelo:'',concessionarias: this.concessionarias,id:6};

  clientes: Cliente[] = [];
  areaId: number = 1;
  automovelId: number = 1;


  concessionariaSelecionadaId: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.areaId = Number(routeParams.get('areaId'));
    this.automovelId = Number(routeParams.get('automovelId'));
    this.CarregarAutomovel(this.automovelId);
    this.CarregarClientes();
    this.CarregarConcessionariasId();
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

  CarregarConcessionariasId(){
    var config = {
      method: 'get',
      url: 'https://localhost:7206/locacao/concessionarias/' + this.areaId + '/' + this.automovelId,
    };
    var instance = this;
    axios(config)
      .then(function (response) {

        instance.concessionariasId = response.data;

        
        instance.concessionariasId.forEach(concessionaria => {
          type ObjectKey = keyof typeof concessionaria;
          const key = 'id' as ObjectKey;
          
          instance.CarregarConcessionaria(Number(concessionaria[key]));
        });

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CarregarConcessionaria(concessionariaId: number){
    var config = {
      method: 'get',
      url: 'https://localhost:7206/concessionaria/buscar/' + concessionariaId ,
    };
    var instance = this;
    axios(config)
      .then(function (response) {

        instance.concessionarias.push(response.data);
        console.log(instance.concessionarias);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CarregarAutomovel(automovelId:number){
    var config = {
      method: 'get',
      url: 'https://localhost:7206/automovel/buscar/' + automovelId,
    };
    var instance = this;
    axios(config)
      .then(function (response) {
        instance.automovel = response.data; 
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  Vender(){

    var concessionariaid = document.getElementById('concessionaria') as HTMLInputElement;
    var config = {
      method: 'put',
      url: 'https://localhost:7206/locacao/vender/' + this.areaId + '/' + this.automovelId + "/" + concessionariaid.value,
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
