import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatesModule } from './rates/rates.module';
import { SocketService } from './socket/socket.service';
import { SocketModule } from './socket/socket.module';
import { RatesModule as AppRatesModule} from './app/rates/rates.module';

@Module({
  imports: [RatesModule, SocketModule, AppRatesModule],
  controllers: [AppController],
  providers: [AppService, SocketService],
})
export class AppModule {}
