import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { LocalStorageService } from "src/app/core/local.storage.service";
import { Logger } from "src/app/core/logger.service";
import { TLocation } from "src/app/feature/models/weather.type";
import { FeatureConstants } from "src/app/feature/utils";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "ng-search-details",
  templateUrl: "./search-details.component.html",
  styleUrls: ["./search-details.component.scss"],
})
export class SearchDetailsComponent implements OnInit, OnChanges {
  @Input() public detailweatherdata: Array<TLocation> | undefined = [];
  public isCurrentWeatherEnable: boolean | false | undefined;

  constructor(
    private router: Router,
    private logger: Logger,
    private localStorage: LocalStorageService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.logger.debug(":: SearchDetailsComponent ngOnChanges ::");
    this.updateWeather(this.detailweatherdata);
  }

  ngOnInit(): void {
    this.logger.debug(":: SearchDetailsComponent OnInit ::");
    const getWeatherData = this.localStorage.get(
      FeatureConstants.ZIP_WEATHER_DATA
    );
    this.updateWeather(getWeatherData);
  }

  identify(index: any, item: TLocation) {
    return item.id;
  }

  goToForecast = (weather: any) => {
    this.localStorage.set(FeatureConstants.LOCATION, weather.name);
    this.router.navigate([`forecast/${weather?.zipcode}`]);
  };

  removeWeather = (id: string) => {
    this.logger.debug("removeWeatherData", id);
    const exisitingData: Array<TLocation> = this.localStorage.get(
      FeatureConstants.ZIP_WEATHER_DATA
    );
    const newDataArray: Array<TLocation> = exisitingData.filter(
      (item) => item.id !== id
    ) as Array<TLocation>;
    this.localStorage.set(FeatureConstants.ZIP_WEATHER_DATA, newDataArray);
    this.detailweatherdata = newDataArray;
  };

  updateWeather = (data?: Array<TLocation>) => {
    this.logger.debug("setUpdateWeatherData");

    this.isCurrentWeatherEnable =
      this.localStorage.get(FeatureConstants.ZIP_WEATHER_DATA) !== null &&
      this.localStorage.get(FeatureConstants.ZIP_WEATHER_DATA).length > 0
        ? true
        : false;
    if (this.isCurrentWeatherEnable) {
      this.logger.debug("inside isCurrentWeatherEnable", "");
      this.detailweatherdata = data;
    }
    this.logger.debug(
      "this.isCurrentWeatherEnable",
      this.isCurrentWeatherEnable
    );
    this.logger.debug("", this.detailweatherdata);
  };
}
