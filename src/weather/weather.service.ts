import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { currentWeatherDto } from './dtos/current-weather.dto';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}
  // for current weather
  async getCurrentWeather(city: string): Promise<currentWeatherDto> {
    const apiKey = process.env.WEATHERBIT_API_KEY;

    const url = `http://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    const response = await firstValueFrom(this.httpService.get(url));

    const {
      ob_time,
      city_name,
      sunrise,
      sunset,
      temp,
      weather,
      snow,
      wind_spd,
    } = response.data.data[0];

    return new currentWeatherDto({
      city_name,
      sunrise,
      sunset,
      ob_time,
      tempreture: temp,
      snow,
      wind_speed: wind_spd,
      description: weather.description,
    });
  }
  //
}
