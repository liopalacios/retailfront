import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateclientsComponent } from './components/createclients/createclients.component';
import { ListclientsComponent } from './components/listclients/listclients.component';
import { KpiclientsComponent } from './components/kpiclients/kpiclients.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';

const routes: Routes = [
  {path:'list',component:ListclientsComponent},
  {path:'create',component:CreateclientsComponent},
  {path:'kpi',component:KpiclientsComponent},
  {path:'prediccion',component:PrediccionComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
