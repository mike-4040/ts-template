import { exit } from 'node:process';
import { scheduler } from 'node:timers/promises';

await scheduler.wait(1000); // Wait one second before continuing 

console.log('Hello World !');

exit(0);
