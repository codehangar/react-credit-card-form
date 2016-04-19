const opn = require('opn');
console.log('start');

var spawn = require('child_process').spawn;

var child = spawn('webpack', ['--colors']);
child.stdout.on('data', function(chunk) {

  var child2 = spawn('python', ['-m', 'SimpleHTTPServer', '8000']);
  child2.stdout.pipe(process.stdout);

  var child3 = spawn('webpack', ['--colors', '--watch']);
  child3.stdout.pipe(process.stdout);

  opn('http://localhost:8000/src/');

});
