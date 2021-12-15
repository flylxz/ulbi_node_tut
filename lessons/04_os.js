const os = require('os');
const cluster = require('cluster');
const e = require('express');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 1; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker with pid= ${worker.process.pid} has gone`);
    if (code === 0) {
      cluster.fork();
    } else {
      console.log('Worker has gone');
    }
  });
} else {
  console.log(`Worker with pid= ${process.pid} started`);

  setInterval(() => {
    console.log(`Worker with pid= ${process.pid} is working`);
  }, 5000);
}
