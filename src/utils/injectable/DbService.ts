import { injectable } from "inversify";

import Database from "@tauri-apps/plugin-sql";
import { writable, type Writable } from "svelte/store";

const DB_NAME = "sqlite:zotille-tools.db";

@injectable()
export class DbService {
  done: Writable<boolean> = writable(false);
  db!: Database;
  constructor() {
    this.init();
  }

  init = async () => {
    this.db = await Database.load(`sqlite:${DB_NAME}`);
    this.done.set(true);
  };
}
