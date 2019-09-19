import { program } from "../";
import sinon_moduleObject from "sinon";
import should from "should";
var sinon = sinon_moduleObject.sandbox.create();


program.command('bare');

program.commandHelp().should.equal('Commands:\n  bare\n');

program.command('mycommand [options]');

program.commandHelp().should.equal('Commands:\n  bare\n  mycommand [options]\n');
