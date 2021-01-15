process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const { pwd } = require('./pwd');
  const { ls } = require('./ls');

  if (cmd === 'pwd') {
    console.log(pwd(cmd));
    //return pwd(cmd);
  } else if (cmd === 'ls') {
    return ls;
  } else if (cmd === 'cat') {
    process.stdout.write('enter fileName > ');

    process.stdin.on('fN', (fN) => {
      // my thought process here is to take the new input, which should be the filename, and then run the method in cat.js using that input. But I don't know how to handle passing the new input into the method, because the method is defined with multiple arguments =(

      // their hints might be helpful if we can't figure it out ourselves

      const newCmd = fN.toString();
    });
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
