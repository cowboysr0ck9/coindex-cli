import { cli } from "./base";
import {
  SET_CMD,
  SET_MSG,
  SHOW_CMD,
  SHOW_MSG,
  REMOVE_CMD,
  REMOVE_MSG,
} from "./constants";
import { set, show, remove } from "./commands";

cli.command(SET_CMD).description(SET_MSG).action(set);

cli.command(SHOW_CMD).description(SHOW_MSG).action(show);

cli.command(REMOVE_CMD).description(REMOVE_MSG).action(remove);

cli.parse(process.argv);
