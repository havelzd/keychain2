import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { poolConfig } from './db/db.config';
import { User } from './domain/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: poolConfig.database,
      schema: 'public',
      host: poolConfig.host,
      port: poolConfig.port,
      username: poolConfig.user,
      password: poolConfig.password as string,
      entities: [User],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
