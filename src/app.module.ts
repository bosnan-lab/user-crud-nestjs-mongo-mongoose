import {
  HttpException,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { UserModule } from './model/user/user.module';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { loggerOptions } from './shared/logger/logger-options';
import { CorrelationIdMiddleware, SentryMiddleware } from './middleware';
import { configOptions } from './config';
import { AuthModule } from './model/auth/auth.module';
import { AuthService } from './model/auth/auth.service';
import { SentryInterceptor, SentryModule } from '@ntegral/nestjs-sentry';
import { APP_INTERCEPTOR } from '@nestjs/core';

// TODO: INFORMATION
// 1 = 'sentry' COME FROM './config/config-loader.ts' - sentry: {dsn: process.env.SENTRY_DSN, enabled: process.env.SENTRY_ENABLED === 'true',},
// 2 = 'environment' COME FROM './config/config-loader.ts' - environment: process.env.NODE_ENV,

@Module({
  imports: [
    UserModule,
    AuthModule,
    LoggerModule.forRoot(loggerOptions),
    ConfigModule.forRoot(configOptions),
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const sentryConfig = configService.get('sentry'); // 1
        const environment = configService.get('environment'); // 2

        return {
          dsn: sentryConfig.dsn,
          enabled: sentryConfig.enabled,
          environment,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    AuthService,
    {
      provide: APP_INTERCEPTOR,
      useValue: new SentryInterceptor({
        filters: [
          {
            type: HttpException,
            filter: (exception: HttpException) => {
              return 500 > exception.getStatus();
            },
          },
        ],
      }),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware, SentryMiddleware).forRoutes('*');
  }
}
