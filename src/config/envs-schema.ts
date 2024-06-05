import * as Joi from 'joi';

import 'dotenv/config'; // IMPORT FROM .ENV

// VALIDATE ENVIRONMENT VARIABLES AND ASSIGN THEM TO envsSchema
export const envsSchema = Joi.object({
  PORT: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
  NODE_ENV: Joi.string().default('development'),
  SENTRY_DSN: Joi.string().required(),
  SENTRY_ENABLED: Joi.string().default('false').allow('true', 'false'),
}).unknown(false);
