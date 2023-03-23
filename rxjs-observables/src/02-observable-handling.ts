import { Observable } from 'rxjs';

const source = new Observable(observer => {
  let count = 0;
  console.log('Observable created');

  const timer = setInterval(() => {
    observer.next(count);
    count++;
  }, 1000);

  setTimeout(() => observer.complete(), 4500);

  return () => {
    console.log('Observable destroyed');
    clearInterval(timer);
  };
});

const subscription = source.subscribe(
  value => console.log('next: ', value),
  error => console.error('error: ', error),
  () => console.log('complete')
);
