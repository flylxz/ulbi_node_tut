const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {
//   recursive: true,
// });

// console.log('start');

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('dir created');
// });

// console.log('end');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'qwerty qwerty ', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('file wrote');
// });

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'appended text ', (err) => {
//   if (err) {
//     throw err;
//   }
//   fs.appendFile(
//     path.resolve(__dirname, 'test.txt'),
//     'appended text ',
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log('file wrote');
//     }
//   );
// });

const writeFileAsync = async (path, data) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );

const appendFileAsync = async (path, data) =>
  new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );

const readFileAsync = async (path) =>
  new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );

const removeFileAsync = async (path) =>
  new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );

const myPath = path.resolve(__dirname, 'test.txt');

// writeFileAsync(myPath, 'qwerty data ')
//   .then(() => appendFileAsync(myPath, 'appended data '))
//   .then(() => appendFileAsync(myPath, 'appended data '))
//   .then(() => appendFileAsync(myPath, 'appended data '))
//   .then(() => readFileAsync(myPath))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(myPath)
//   .then(() => console.log('delete success'))
//   .catch((err) => console.log(err));

const text = process.env.TEXT || '111 222';

writeFileAsync(myPath, text)
  .then(() => readFileAsync(myPath))
  .then((data) => data.split(' ').length)
  .then((count) =>
    writeFileAsync(
      path.resolve(__dirname, 'count.txt'),
      `Number of words ${count}`
    )
  )
  //   .then(() => removeFileAsync(myPath))
  .catch((err) => console.log(err));
