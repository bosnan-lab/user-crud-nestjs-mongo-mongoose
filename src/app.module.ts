import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './model/user/user.module';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { loggerOptions } from './shared/logger/logger-options';
import { CorrelationIdMiddleware } from './middleware';
import { configOptions } from './config';
import { AuthModule } from './model/auth/auth.module';
import { AuthService } from './model/auth/auth.service';

@Module({
  imports: [
    UserModule,
    AuthModule,
    LoggerModule.forRoot(loggerOptions),
    ConfigModule.forRoot(configOptions),
  ],
  controllers: [],
  providers: [AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
