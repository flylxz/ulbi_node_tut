const path = require('path');

console.log(
  path.join('Склеить участки пути', __dirname, 'first', 'second', 'third')
);
// console.log(path.resolve('first', 'second', 'third'));

const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js');
console.log('Парсинг пути', path.parse(fullpath));
console.log('Разделитель в ос', path.sep);
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'));
console.log('Название файла', path.basename(fullpath));
console.log('Расширение файла', path.extname(fullpath));

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url);
