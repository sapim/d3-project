import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  redirectTo:'home',
  pathMatch:'full'
},{
  path: 'line-chart',
  loadChildren:()=>import('./line-chart').then(m=>m.LineChartModule)
},{
  path: 'bar-chart',
  loadChildren:()=>import('./bar-chart').then(m=>m.BarChartModule)
},{
  path: 'pie-chart',
  loadChildren:()=>import('./pie-chart').then(m=>m.PieChartModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
