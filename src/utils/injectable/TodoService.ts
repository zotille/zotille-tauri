import { inject, injectable } from "inversify";
import { DbService } from "./DbService";

@injectable()
export class TodoService {
  dbService: DbService;
  list: any;

  constructor(@inject(DbService) dbService: DbService) {
    this.dbService = dbService;
    this.dbService.done.subscribe((done) => {
      if (done) {
        this.init();
      }
    });
  }

  init = async () => {
    await this.dbService.db.execute("CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, done INTEGER)");

    this.list = await this.getAll();
  };

  getAll = async () => {
    const res = await this.dbService.db.execute("SELECT * FROM todo");
    return res;
  };
}
