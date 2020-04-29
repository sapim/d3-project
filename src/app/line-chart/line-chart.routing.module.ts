import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './componets';

const routes: Routes = [
  { path:'', component:  ContainerComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineChartRoutingModule {}
