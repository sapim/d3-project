import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartRoutingModule } from './pie-chart.routing.module';
import { PieChart1Component, ContainerComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    PieChartRoutingModule
  ],
  declarations: [PieChart1Component,ContainerComponent]
})
export class PieChartModule { }
