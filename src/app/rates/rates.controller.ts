import { Controller, Get, Param } from '@nestjs/common';
import { RatesService } from './rates.service';

@Controller('api/app/rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get(':symbol')
  findOne(@Param('symbol') symbol: string) {
    return this.ratesService.findOne(symbol)
  }
}
