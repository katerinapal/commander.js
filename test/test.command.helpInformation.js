import { program } from "../";
import sinon_moduleObject from "sinon";
import should from "should";
var sinon = sinon_moduleObject.sandbox.create();


program.command('somecommand');
program.command('anothercommand [options]');

var expectedHelpInformation = [
  'Usage:  [options] [command]',
  '',
  'Options:',
  '  -h, --help                output usage information',
  '',
  'Commands:',
  '  somecommand',
  '  anothercommand [options]',
  ''
].join('\n');

program.helpInformation().should.equal(expectedHelpInformation);
