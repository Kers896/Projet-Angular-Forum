import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SigninModule } from './signin/signin.module';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [SigninModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [__dirname + '/signin/*.entity{.ts,.js}'],
    synchronize: true,
 }),
  AuthModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
