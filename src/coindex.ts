#!/usr/bin/env node

import { cli } from "./base";
import {
  PKG_VERSION,
  KEY_CMD,
  KEY_MSG,
  CHECK_CMD,
  CHECK_MSG,
} from "./constants";

cli
  .version(PKG_VERSION)
  .command(KEY_CMD, KEY_MSG)
  .command(CHECK_CMD, CHECK_MSG)
  .parse(process.argv);
