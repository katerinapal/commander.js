import child_process_moduleObject from "child_process";
import path from "path";
import should from "should";
var exec = child_process_moduleObject.exec;

var bin = path.join(__dirname, './fixtures-ts/pm.ts')

// success case
exec(process.argv[0] + ' -r ts-node/register ' + bin + ' install', function (error, stdout, stderr) {
  stdout.should.equal('install\n');
});
