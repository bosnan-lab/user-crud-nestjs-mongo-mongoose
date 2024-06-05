import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// TODO: INFORMATION
// 1. API KEY SERVICE
// 2. CONFIG SERVICE TO ACCESS ENVIRONMENT VARIABLES

@Injectable()
export class AuthService {
  // 1
  private readonly apiKeyService;
  constructor(
    //2
    private readonly configService: ConfigService,
  ) {
    this.apiKeyService = configService.get('apiKey');
  }

  validateApiKey(apiKey: string): boolean {
    return this.apiKeyService === apiKey;
  }
}
