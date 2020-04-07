import { KeyManager } from "../lib/KeyManager";
import colors from "colors";
import inquirer from "inquirer";
import {
  API_KEY,
  API_KEY_REMOVE_SUCCESS_MSG,
  API_KEY_REMOVE_FAILURE_MSG,
  API_KEY_UNFOUND_MSG,
} from "../constants";
import { km } from "../base";
import { isRequired } from "../validation";

export const set = async () => {
  const input = await inquirer.prompt({
    type: "input",
    name: API_KEY,
    message: `Please enter ${API_KEY}`.green,
    validate: isRequired,
  });

  km.set(input.API_KEY);
};

export const show = () => {
  try {
    const key = km.get();
    console.log(key);
  } catch (error) {
    console.log(API_KEY_UNFOUND_MSG);
  }
};

export const remove = () => {
  try {
    km.delete();
    console.log(API_KEY_REMOVE_SUCCESS_MSG);
  } catch (error) {
    console.error(API_KEY_REMOVE_FAILURE_MSG);
  }
};
