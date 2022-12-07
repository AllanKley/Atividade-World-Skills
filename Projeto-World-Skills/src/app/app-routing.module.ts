import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaDetalhesComponent}  from  './area-detalhes/area-detalhes.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  {path: 'detalhes/:areaId', component: AreaDetalhesComponent},
  {path: 'venda/:areaId/:automovelId', component: VendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
