import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

// TODO: INFORMATION
// 1 = NAME OF THE HEADER WHERE THE API KEY SHOULD BE PASSED TO US

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private authService: AuthService) {
    // 1
    super({ header: 'apiKey', prefix: '' }, true, (apikey, done) => {
      const checkKey = authService.validateApiKey(apikey);

      if (!checkKey) {
        return done(false);
      }

      return done(true);
    });
  }
}
