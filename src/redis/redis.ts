// 'use server';

import { env } from "@/data/env/server"
import { Redis } from "@upstash/redis"

export const redisClient = new Redis({
  url: env.REDIS_URL,
  token: env.REDIS_TOKEN,
})


// import Redis from 'ioredis';
// export const redisClient = new Redis(`rediss://default:${env.REDIS_TOKEN}@current-mongrel-45638.upstash.io:6379`)
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