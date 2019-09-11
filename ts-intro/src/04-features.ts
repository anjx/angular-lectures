function makeArr<T>(arg: T): T[] {
  return [arg];
};

console.log(makeArr<string>('abc'), makeArr<number>(123), makeArr('a1b2c3'));

type state = 'on' | 'off';
let someStatus: state = 'on';

enum daysOfWeek {
  Sun, // 0
  Mon, // 1
  Tue, // 2
  Wed, // 3
  Thu, // 4
  Fri, // 5
  Sat = 6
};

let today = daysOfWeek.Fri;

enum Cats {
  Masya, // 0
  Lucy = 5,
  Chloe, // 6
  Sophie = 10,
  // .... // 11, 12, ...
  Barsik = 'justCat',
  // Murzik, // Error
};

console.log(Cats[0], Cats.Lucy);