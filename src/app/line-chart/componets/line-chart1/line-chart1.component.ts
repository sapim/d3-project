import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as d3 from "d3-selection";
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import { PopulationService } from "src/app/shared/service";

@Component({
  selector: "app-line-chart1",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./line-chart1.component.html",
  styleUrls: ["./line-chart1.component.css"],
})
export class LineChart1Component implements OnInit {
  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private dots: any;
  private line: d3Shape.Line<[number, number]>;

  constructor(private populationService: PopulationService) {
    this.width = 1000 - this.margin.right - this.margin.left;
    this.height = 300 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
    this.drawDots();
  }

  initSvg() {
    this.svg = d3
      .select("svg")
      .append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
  }

  initAxis() {
    this.x = d3Scale
      .scaleTime()
      .range([0, this.width])
      .domain(
        d3Array.extent(
          this.populationService.getPopulationInTotal,
          (d) => d.year
        )
      );
    this.y = d3Scale
      .scaleLinear()
      .range([this.height, 0])
      .domain(
        d3Array.extent(
          this.populationService.getPopulationInTotal,
          (d) => d.population
        )
      );
  }

  drawAxis() {
    this.svg
      .append("g")
      .call(d3Axis.axisBottom(this.x))
      .attr("transform", `translate(0,${this.height})`);
    this.svg
      .append("g")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("class", "y-axis-title")
      .attr("transform", "rotate(-90)")
      .attr("dy", "2em") //调整水平单位偏离距离，默认偏移1个dy
      // .attr('y',6) 向右偏移几个dy
      .style("text-anchor", "end") //标签末尾与y轴顶端对齐
      .text("人口(万人)");
  }

  drawLine() {
    this.line = d3Shape
      .line()
      .x((d: any) => this.x(d.year))
      .y((d: any) => this.y(d.population));
    this.svg
      .append("path")
      .attr("class", "line")
      .datum(this.populationService.getPopulationInTotal)
      .attr("d", this.line);
  }

  drawDots() {
    this.dots = this.svg
      .append("g")
      .attr("class", "dots")
      .selectAll("circle")
      .data(this.populationService.getPopulationInTotal)
      .enter()
      .append("g")
      .attr("class", "dot");
    this.dots
      .append("circle")
      .attr("cx", (d) => this.x(d.year))
      .attr("cy", (d) => this.y(d.population))
      .attr("r", 3.5)
      .attr("fill", "steelblue");
    this.dots
      .append("text")
      .attr("dx", (d) => this.x(d.year) + 10)
      .attr("dy", (d) => this.y(d.population) + 5)
      .text((d) => d.population)
      .attr("font-size", "8px");
  }
}
