import child_process_moduleObject from "child_process";
import path from "path";
import should from "should";
var spawn = child_process_moduleObject.spawn;

var bin = path.join(__dirname, './fixtures/pm');
var proc = spawn(bin, ['listen'], {});

var output = '';
proc.stdout.on('data', function (data) {
  output += data.toString();
});

// Set a timeout to give 'proc' time to setup completely
setTimeout(function () {
  proc.kill('SIGINT');

  // Set another timeout to give 'prog' time to handle the signal
  setTimeout(function() {
    output.should.equal('SIGINT\n');
  }, 1000);

}, 2000);