import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";

import { ContainerComponent, LineChart1Component } from "./componets";
import { LineChartRoutingModule } from './line-chart.routing.module';

@NgModule({
  imports: [CommonModule, MatExpansionModule,LineChartRoutingModule],
  declarations: [ContainerComponent, LineChart1Component],
})
export class LineChartModule {}
