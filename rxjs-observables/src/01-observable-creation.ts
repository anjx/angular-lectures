import { Observable } from 'rxjs';

const source = new Observable((observer) => {
  let count = 0;

   const timer = setInterval(() => {
       observer.next(count);
       count++;
   }, 500);

   return () => clearInterval(timer);
});

// source.subscribe((value) => console.log(value));

const promise = new Promise((resolve, reject) => {
  let count = 0;

  const timer = setInterval(() => {
    resolve(count);
    count++;
  }, 500);

  return () => clearInterval(timer);
}).then(console.log);
