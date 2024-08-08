import { z } from 'zod';
import 'dotenv/config';

export const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.string().default('3000'),
  REACT_APP_API_URL: z.string(),
});

const _parsedEnv = envSchema.safeParse(process.env);

if (_parsedEnv.success === false) {
  console.error('❌ Invalid environment variables', _parsedEnv.error.format());

  throw new Error('Invalid environment variables.');
}

export const clientEnv = _parsedEnv.data;
