import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

export interface Locacao {
  area: number,
  quantidade: number
}

export interface Area {
  area: number,
  quantidade: number
}

@Component({
  selector: 'app-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.scss']
})
export class PatioComponent implements OnInit {

  locacoes: Locacao[] = [];
  areas: Area[] = [  ];
 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.CarregarAreas();
    for(let i = 1; i<=11; i++){
      this.areas.push({area:i, quantidade:0});
    }
  }

  SelecionarArea(area:number){
    this.router.navigate(["detalhes/",area]);
  }

  CarregarAreas() {
    var config = {
      method: 'get',
      url: 'https://localhost:7206/locacao/all',
    };
    var instance = this;
    axios(config)
      .then(function (response) {
        instance.locacoes = response.data;

        instance.locacoes.forEach(locacao => {
          instance.areas[locacao.area-1].quantidade += locacao.quantidade;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }



}