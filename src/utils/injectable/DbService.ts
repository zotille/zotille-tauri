import { injectable } from "inversify";

import Database from "@tauri-apps/plugin-sql";
import { writable, type Writable } from "svelte/store";

@injectable()
export class DbService {
  done: Writable<boolean> = writable(false);
  db!: Database;
  constructor() {
    this.init();
  }

  init = async () => {
    this.db = await Database.load("sqlite:test.db");
    this.done.set(true);
  };
}
