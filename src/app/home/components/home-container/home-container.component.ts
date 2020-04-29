import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.css"],
})
export class HomeContainerComponent implements OnInit {
  examples = [
    {
      title: "线型表",
      route: "/line-chart",
    },
    {
      title: "柱状表",
      route: "/bar-chart",
    },
    {
      title: "饼状图",
      route: "/pie-chart",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
