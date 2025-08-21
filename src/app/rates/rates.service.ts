import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { SocketService } from '../../socket/socket.service';

@Injectable()
export class RatesService {

  constructor(private readonly socketService: SocketService) {}

  private formatSymbol(symbol: string) {
    if (symbol === 'usd') symbol = 'usd-try';
    if (symbol === 'eur') symbol = 'eur-try';
    if (symbol === 'gbp') symbol = 'gbp-try';
    if (symbol === 'chf') symbol = 'chf-try';
    if (symbol === 'jpy') symbol = 'jpy-try';
    if (symbol === 'cad') symbol = 'cad-try';
    if (symbol === 'aud') symbol = 'aud-try';
    if (symbol === 'sar') symbol = 'sar-try';
    if (symbol === 'grm') symbol = 'has-altin';
    if (symbol === 'gr') symbol = '1-gr-kulplu-22';
    if (symbol === 'h22') symbol = '1-gr-kulplu-22';
    if (symbol === 'has') symbol = 'has-altin';
    if (symbol === 'h18') symbol = '18-ayar';
    if (symbol === 'h14') symbol = '14-ayar';

    return symbol
  }

  async findOne(symbol: string) {
    symbol = symbol.toLowerCase();

    const data = this.socketService.getCurrency(this.formatSymbol(symbol));

    if (!data) return "1-1"

    return `${data.alis}-${data.satis}`;
  }
}
