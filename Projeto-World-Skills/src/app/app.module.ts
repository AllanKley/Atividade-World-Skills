import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatioComponent } from './patio/patio.component';
import { AreaDetalhesComponent } from './area-detalhes/area-detalhes.component';
import { VendaComponent } from './venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    PatioComponent,
    AreaDetalhesComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: PatioComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
