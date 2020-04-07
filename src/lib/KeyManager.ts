import Configstore from "configstore";
import { PKG_NAME, API_KEY } from "../constants";

export class KeyManager {
  config: Configstore;

  constructor() {
    this.config = new Configstore(PKG_NAME);
  }

  set(key: string) {
    this.config.set(API_KEY, key);
    return key;
  }

  get() {
    const key = this.config.get(API_KEY);
    return key;
  }

  delete() {
    this.config.delete(API_KEY);
    return;
  }
}
