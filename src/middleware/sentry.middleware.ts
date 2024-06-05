import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';
import { Handlers } from '@sentry/node';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class SentryMiddleware implements NestMiddleware {
  constructor(@InjectSentry() private readonly sentryService: SentryService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.sentryService.instance().configureScope((scope) => {
      scope.addEventProcessor((event) => {
        return Handlers.parseRequest(event, req);
      });
    });

    next();
  }
}
