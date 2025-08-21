import { Controller, Get, Param, Header } from '@nestjs/common';
import { RatesService } from './rates.service';
import { SocketService } from '../../socket/socket.service';

@Controller('api/app/rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get(':symbol')
  @Header('content-type', 'text/html')
  async findOne(@Param('symbol') symbol: string) {
    const data = await this.ratesService.findOne(symbol)
    return `
<html>
<head></head>
<body>
<div>${data}</div>
</body>
</html>`
  }
}
