const { of, interval } = require('rxjs');
const { map, pluck, mapTo, switchMapTo, delay, finalize, concatMapTo, concatMap, mergeMap } = require('rxjs/operators');

const obs1 = interval(1000);
const obs2 = of(2).pipe(
  delay(5000),
  finalize(() => console.log('request has been cancelled'))
);

console.log('obs1 start');
obs1.pipe(
  mergeMap(() => obs2)
).subscribe((value) => console.log('next: ', value));
