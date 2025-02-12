import { inject, injectable } from "inversify";
import { DbService } from "./DbService";
import { TodoItem, type TodoItemModel } from "src/types";
import { writable, type Writable } from "svelte/store";

const TABLE_NAME = "todo_list";
@injectable()
export class TodoService {
  dbService: DbService;
  list: Writable<TodoItem[]> = writable([]);

  constructor(@inject(DbService) dbService: DbService) {
    this.dbService = dbService;
    this.dbService.done.subscribe((done) => {
      if (done) {
        this.init();
      }
    });
  }

  init = async () => {
    const table = [
      ["id", "INTEGER PRIMARY KEY AUTOINCREMENT"],
      ["title", "TEXT"],
      ["description", "TEXT"],
      ["done", "INTEGER"],
      ["doneTime", "INTEGER"],
      ["createAt", "INTEGER"],
      ["updateAt", "INTEGER"],
    ];
    await this.dbService.db.execute(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (${table.map((item) => item.join(" ")).join(",")})`);
    this.getAll();
  };

  getAll = async () => {
    const res = await this.dbService.db.select<TodoItemModel[]>(`SELECT * FROM ${TABLE_NAME}`);
    this.list.set(res.map((item) => new TodoItem(item)));
  };

  addTodo = (item: TodoItem) => {
    this.list.update((list) => {
      list.push(item);
      return list;
    });
  };
}
