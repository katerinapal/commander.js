import { program } from "../";
import should from "should";

program
  .version('0.0.1')
  .option('-c, --cheese [type]', 'optionally specify the type of cheese');

program.parse(['node', 'test', '--cheese']);
program.cheese.should.be.true();
