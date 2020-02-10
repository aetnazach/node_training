// https://nodejs.org/uk/docs/guides/event-loop-timers-and-nexttick/

setImmediate(() => console.log('setImmediate'));
process.nextTick(console.log, 'pocess.nextTick');
setTimeout(() => console.log('setTimeout'));

process.nextTick(() => {
  setImmediate(() => console.log('inner setImmediate'));
  setTimeout(() => console.log('inner setTimeout'));
});