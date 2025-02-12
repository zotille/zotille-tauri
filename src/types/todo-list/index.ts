import { DbService, TodoService } from "@utils/injectable";
import { inject, injectable } from "inversify";
import { writable, type Writable } from "svelte/store";

export interface TodoItemModel {
  id: number;
  title: string;
  description: string;
  done: number;
  doneTime: number;
  createAt: number;
  updateAt: number;
}

@injectable()
export class TodoItem {
  id?: number;
  title: Writable<string> = writable("");
  description: Writable<string> = writable("");
  done: Writable<boolean> = writable(false);
  doneTime: Writable<number> = writable(0);
  createAt: Writable<number> = writable(0);
  updateAt: Writable<number> = writable(0);

  @inject(DbService) dbService!: DbService;
  @inject(TodoService) todoService!: TodoService;

  constructor(item?: TodoItemModel) {
    if (item) {
      const { id, title, description, done } = item;
      this.id = id;
      this.title.set(title);
      this.description.set(description);
      this.done.set(Boolean(done));
      this.doneTime.set(done ? item.doneTime : 0);
      this.createAt.set(item.createAt || Date.now());
      this.updateAt.set(item.updateAt || Date.now());
    }
  }

  save = async () => {
    const tableName = "todo_list";
    if (this.id) {
      await this.dbService.db.execute(
        `UPDATE ${tableName} SET title = $1, description = $2, done = $3, doneTime = $4, createAt = $5, updateAt = $6 WHERE id = $7`,
        [this.title, this.description, this.done ? 1 : 0, this.doneTime, this.createAt, this.updateAt, this.id]
      );
    } else {
      const res = await this.dbService.db.execute(
        `INSERT into ${tableName} (title, description, done, doneTime, createAt, updateAt) values ($1, $2, $3, $4, $5, $6)`,
        [this.title, this.description, this.done ? 1 : 0, this.doneTime, this.createAt, this.updateAt]
      );
      this.id = res.lastInsertId;
      this.todoService.addTodo(this);
    }
  };
}
