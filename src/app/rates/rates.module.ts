import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { SocketService } from '../../socket/socket.service';

@Module({
  providers: [RatesService, SocketService],
  controllers: [RatesController]
})
export class RatesModule {}
