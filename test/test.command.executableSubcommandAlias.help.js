import child_process_moduleObject from "child_process";
import path from "path";
import should from "should";
var exec = child_process_moduleObject.exec;



var bin = path.join(__dirname, './fixtures/pm')

// success case
exec(bin + ' help', function (error, stdout, stderr) {
  stdout.should.containEql('install|i');
  stdout.should.containEql('search|s');
  stdout.should.containEql('cache|c');
  stdout.should.containEql('list');
  stdout.should.containEql('publish|p');
  stdout.should.not.containEql('pm|');
});
