import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
import { AquaticModule } from './aquatic/aquatic.module';

@Module({
  imports: [
    AquaticModule,
    MongooseModule.forRoot(
      'mongodb://mongoAdm:mongoAdm!%40%23%24@203.172.40.206:27017/ecomerceDB?authSource=ecomerceDB', //connection string
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
