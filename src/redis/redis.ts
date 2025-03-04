// 'use server';

import { env } from "@/data/env/server"
import { Redis } from "@upstash/redis"

export const redisClient = new Redis({
  url: env.REDIS_URL,
  token: env.REDIS_TOKEN,
})
// export const redisClient = new Redis({
//   url:  'redis://localhost:6379',
//   token: '',
// })

// import Redis from 'ioredis';
// Use a symbol to ensure the instance is unique

// export const redisClient = new Redis(env.REDIS_HOST || 'redis://localhost:6379')
// Initialize Redis (using environment variables for connection details)
// const getRedisConfiguration = () => {
//   return {
//     host: env.REDIS_HOST || 'localhost',
//     port: parseInt(env.REDIS_PORT || '6379'),
//     // Only set password and username if they're actually provided
//     // ...(process.env.REDIS_PASSWORD ? { password: process.env.REDIS_PASSWORD } : {}),
//     // ...(process.env.REDIS_USERNAME ? { username: process.env.REDIS_USERNAME } : {}),
//     tls: env.REDIS_TLS === 'true' ? {} : undefined,
//   };
// };

// Create a Redis client singleton
// console.log('I AM HERE')

// export const redisClient = new Redis({
//   host: env.REDIS_HOST || 'localhost',
//   port: Number(env.REDIS_PORT) || 6379,
//   password: env.REDIS_PASSWORD,
// })