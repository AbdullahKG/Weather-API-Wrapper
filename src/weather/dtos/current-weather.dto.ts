import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class currentWeatherDto {
  constructor(partial: Partial<currentWeatherDto>) {
    Object.assign(this, partial);
  }

  @IsString()
  @IsNotEmpty()
  ob_time: string;

  @IsString()
  @IsNotEmpty()
  city_name: string;

  @IsString()
  @IsNotEmpty()
  sunrise: string;

  @IsString()
  @IsNotEmpty()
  sunset: string;

  @IsString()
  @IsNotEmpty()
  tempreture: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  snow: number;

  @IsNumber()
  @IsNotEmpty()
  wind_speed: number;
}
