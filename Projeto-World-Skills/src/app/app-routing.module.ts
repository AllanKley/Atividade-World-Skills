import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaDetalhesComponent}  from  './area-detalhes/area-detalhes.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  {path: 'detalhes', component: AreaDetalhesComponent},
  {path: 'venda', component: VendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
