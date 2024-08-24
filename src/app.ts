import { exit, env } from 'node:process';
import { scheduler } from 'node:timers/promises';

console.time('app');

// top-level await is available
await scheduler.wait(1_000);

console.timeEnd('app');

// Env vars from .env file are loaded by node
console.log({ MY_VAR: env.MY_VAR });

exit(0);
