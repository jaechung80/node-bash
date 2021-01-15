const fs = require('fs');
const readFileMethod = fs.readFile(fileName, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});


module.exports = {
  readFileMethod
}
