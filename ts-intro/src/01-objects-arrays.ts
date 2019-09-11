let task: { name: string, description: string } = {
  name: '2Do',
  description: 'I\'m a cool task',
  // smthElse: 'Whoops',
};

let mapLike: { [key: string]: string } = {
  key: 'value',
  // otherKey: 1, // Error
};

let array: number[] = [1, 2, 3, 4];
// array.push('5'); // Error

let tuple: [number, string] = [12, 'September'];
tuple = [13, 'September'];
// tuple = ['13', 'September']; // Error