import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { currentWeatherDto } from './dtos/current-weather.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  // for current weather
  @Get('current')
  async getCurrentWeather(
    @Query('city') city: string,
  ): Promise<currentWeatherDto> {
    const response = await this.weatherService.getCurrentWeather(city);

    return response;
  }

  // for forcast
}
