import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as d3Select from "d3-selection";
import * as d3Array from "d3-array";
import * as d3Scale from "d3-scale";
import * as d3Axis from "d3-axis";
import * as d3Shape from "d3-shape";
import { PopulationService, Rate } from "src/app/shared";

@Component({
  selector: "app-line-chart2",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./line-chart2.component.html",
  styleUrls: ["./line-chart2.component.css"],
})
export class LineChart2Component implements OnInit {
  private margin = { top: 20, right: 20, bottom: 30, left: 30 };
  private y: any;
  private x: any;
  private z: any;
  private svg: any;
  private legend:any;
  private keys: string[] = ["birthRate", "deathRate", "naturalIncreaseRate"];
  private width: number;
  private height: number;
  private footHeight: number = 50;
  private birthLine: d3Shape.Line<[number, number]>;
  private deathLine: d3Shape.Line<[number, number]>;
  private narturalIncreaseLine: d3Shape.Line<[number, number]>;
  populationRate: Rate[];

  constructor(private populationService: PopulationService) {
    this.width = 800 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom - this.footHeight;
  }

  ngOnInit() {
    this.populationRate = this.populationService.getPopulationRate;
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawSvg();
  }

  initSvg() {
    this.svg = d3Select
      .select(".line-chart2")
      .append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);
  }

  initAxis() {
    const yArrMax = [];
    const yArrMin = [];
    this.keys.forEach((k) => yArrMax.push(this.getMax(this.populationRate, k)));
    this.keys.forEach((k) => yArrMin.push(this.getMin(this.populationRate, k)));

    this.x = d3Scale
      .scaleTime()
      .range([0, this.width])
      .domain(d3Array.extent(this.populationRate, (d) => d.year));
    this.y = d3Scale
      .scaleLinear()
      .range([this.height, 0])
      .domain([d3Array.min(yArrMin), d3Array.max(yArrMax)]);
    this.z = d3Scale.scaleOrdinal()
    .range(['steelblue','red','greenyellow']);
  }

  getMax(arr, key: string) {
    return Math.max.apply(
      Math,
      arr.map((a) => a[key])
    );
  }
  getMin(arr, key: string) {
    return Math.min.apply(
      Math,
      arr.map((a) => a[key])
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
      .style("text-anchor", "end")
      .attr('dx','2rem')
      .attr('dy','1rem')
      .text("(%)");
      
    
    this.addLegend()
  }

  addLegend(){
    this.legend = this.svg.append('g')
    .attr('class','legend')
    .attr('font-size',10)
    .selectAll('g')
    .data(this.keys)
    .enter().append('g')
    .attr('transform', (d, i) => `translate(${this.width-150},${i * 20})`)

    this.legend.append('rect')
    .attr('width', 18)
    .attr('height',18)
    .attr('fill',this.z)
    .attr('opacity',.5)

    this.legend.append('text')
    .attr('dx',30)
    .attr('dy',12)
    .text(d=>d)
  }

  drawSvg() {
    this.birthLine = d3Shape
      .area()
      .x((d: any) => this.x(d.year))
      .y0(this.height)
      .y1((d: any) => this.y(d.birthRate))
      .curve(d3Shape.curveMonotoneX);
    this.deathLine = d3Shape
      .area()
      .x((d: any) => this.x(d.year))
      .y0(this.height)
      .y1((d: any) => this.y(d.deathRate))
      .curve(d3Shape.curveMonotoneX);
    this.narturalIncreaseLine = d3Shape
      .area()
      .x((d: any) => this.x(d.year))
      .y0(this.height)
      .y1((d: any) => this.y(d.naturalIncreaseRate))
      .curve(d3Shape.curveMonotoneX);
    this.svg
      .append("path")
      .attr("class", "line")
      .datum(this.populationRate)
      .attr("d", this.birthLine)
      .style('fill','steelblue')
      .style('opacity',0.5)
    this.svg
      .append("path")
      .attr("class", "linered")
      .datum(this.populationRate)
      .attr("d", this.deathLine)
      .style('fill','red')
      .style('opacity',0.5)
    this.svg
      .append("path")
      .attr("class", "linegreen")
      .datum(this.populationRate)
      .attr("d", this.narturalIncreaseLine)
      .style('fill','greenyellow')
      .style('opacity',0.5)
  }
}
