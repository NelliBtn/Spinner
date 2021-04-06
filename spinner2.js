const characters = ['|', '/', '-', '\\', ];
let n = 100;

for (let char of characters) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, n);
  n += 200;
}

setTimeout(() => { process.stdout.write('\n') }, 1900);