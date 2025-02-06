import { inject, injectable } from "inversify";
import { DbService } from "./DbService";
import { derived, type Readable } from "svelte/store";

@injectable()
export class AppService {
  dbService: DbService;
  appDone: Readable<boolean>;

  constructor(@inject(DbService) dbService: DbService) {
    this.dbService = dbService;

    this.appDone = derived([dbService.done], ([$dbDone]) => {
      return $dbDone;
    });
  }
}
