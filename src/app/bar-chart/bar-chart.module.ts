import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent, BarChart1Component } from './components';
import { BarChartRoutingModule } from './bar-chart.routing.module';

@NgModule({
  imports: [
    CommonModule,
    BarChartRoutingModule
  ],
  declarations: [BarChart1Component,ContainerComponent]
})
export class BarChartModule { }
