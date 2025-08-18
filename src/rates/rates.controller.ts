import { Controller, Get, Param } from '@nestjs/common';
import { RatesService } from './rates.service';

@Controller('api/rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  findAll() {
    return this.ratesService.findAll();
  }

  @Get(':symbol')
  findOne(@Param('symbol') symbol: string) {
    return this.ratesService.findOne(symbol)
  }
}
