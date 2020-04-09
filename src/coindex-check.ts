import { cli } from "./base";
import { CHECK_PRICE_CMD, CHECK_PRICE_MSG } from "./constants";
import { check } from "./commands";

cli
  .command(CHECK_PRICE_CMD)
  .description(CHECK_PRICE_MSG)
  .option("--coins <type>", "Add specific coin types in CSV format", "BTC,ADA")
  .option("--cur <currency>", "Change the currency", "USD")
  .action(check);

cli.parse(process.argv);
