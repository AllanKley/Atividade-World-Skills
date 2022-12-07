import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import axios from 'axios';

export interface Automovel {
  modelo: string;
  preO: number;
  id: number;
}

export interface Locacao {
  automovel:number
  automoveis: Automovel[];
  id: number;
}

@Component({
  selector: 'app-area-detalhes',
  templateUrl: './area-detalhes.component.html',
  styleUrls: ['./area-detalhes.component.scss']
})
export class AreaDetalhesComponent implements OnInit {

  automoveis: Automovel[] = [];
  area: Locacao = {automoveis: this.automoveis,automovel:1, id:1};
  areaId: number = 1;
  locacoes: Locacao[] = [];

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.areaId = Number(routeParams.get('areaId'));
    this.CarregarAutomoveis();
  }

  async CarregarArea() {
    var config = {
      method: 'get',
      url: 'https://localhost:7206/locacao/buscar/' + this.areaId,
    };
    var instance = this;
    var response = await axios(config);
    instance.locacoes = response.data;
  }

  CarregarAutomovel(automovelId:number){
    var config = {
      method: 'get',
      url: 'https://localhost:7206/automovel/buscar/' + automovelId,
    };
    var instance = this;
    axios(config)
      .then(function (response) {
        instance.automoveis.push(response.data); 
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async CarregarAutomoveis(){
    await this.CarregarArea();   
    this.locacoes.forEach(alocacao => {
      this.CarregarAutomovel(alocacao.automovel);
    });  
  }

  SelecionarAutomovel(automovelId:number){
    let caminho = "venda/" + this.areaId + "/" + automovelId
    console.log(caminho);
    
    this.router.navigate([caminho]);
  }
}
