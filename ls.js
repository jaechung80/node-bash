const fs = require('fs');

const fsResult = fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('\nprompt > ');
    return 'done';
  }
});

module.exports = {
  fsResult,
};
