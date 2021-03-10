import { WeatherService } from "./../weather.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-search-weather",
  templateUrl: "./search-weather.component.html",
  styleUrls: ["./search-weather.component.css"],
})
export class SearchWeatherComponent implements OnInit {
  @ViewChild("searchWeather") searchWeather: ElementRef;
  searchValue: string = "";

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {}

  search() {
    this.searchValue = this.searchWeather.nativeElement.value;
  }
}
