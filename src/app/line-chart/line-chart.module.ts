import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";

import { ContainerComponent, LineChart1Component } from "./componets";
import { LineChartRoutingModule } from "./line-chart.routing.module";
import { LineChart2Component } from "./componets/line-chart2/line-chart2.component";

@NgModule({
  imports: [CommonModule, MatExpansionModule, LineChartRoutingModule],
  declarations: [ContainerComponent, LineChart1Component, LineChart2Component],
})
export class LineChartModule {}
