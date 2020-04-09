import { getCryptoData } from "../api";
import { Command } from "commander";
import { km } from "../base";
import { CHECK_PRICE_FAILURE_MSG } from "../constants";

export const check = async (cmd: ICheckCommand) => {
  const { coins, cur } = cmd;
  const key = km.get();

  try {
    const data = await getCryptoData(key, coins, cur);
    console.log(data);
  } catch (error) {
    console.error(CHECK_PRICE_FAILURE_MSG);
  }
};

interface ICheckCommand extends Command {
  coins: string;
  cur: string;
}
