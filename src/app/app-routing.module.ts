import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MinhaApostaComponent } from './views/minha-aposta/minha-aposta/minha-aposta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'minha-aposta',
    component: MinhaApostaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
