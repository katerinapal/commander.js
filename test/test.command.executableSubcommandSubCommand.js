import child_process_moduleObject from "child_process";
import path from "path";
import should from "should";
var exec = child_process_moduleObject.exec;


/*
 * The commands look like this
 * pm cache
 * pm cache clear
 * pm cache validate (default)
 */

var bin = path.join(__dirname, './fixtures/pm')
// should list commands at top-level sub command
exec(bin + ' cache help', function (error, stdout, stderr) {
  stdout.should.containEql('Usage:');
  stdout.should.containEql('cache');
  stdout.should.containEql('validate');
});

// should run sub-subcommand
exec(bin + ' cache clear', function (error, stdout, stderr) {
  stdout.should.equal('cache-clear\n');
  stderr.should.equal('');
});

// should print the default command when passed invalid sub-subcommand
exec(bin + ' cache nope', function (error, stdout, stderr) {
  stdout.should.equal('cache-validate\n');
  stderr.should.equal('');
});

