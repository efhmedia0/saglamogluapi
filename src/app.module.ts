import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatesModule } from './rates/rates.module';
import { SocketService } from './socket/socket.service';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [RatesModule, SocketModule],
  controllers: [AppController],
  providers: [AppService, SocketService],
})
export class AppModule {}
