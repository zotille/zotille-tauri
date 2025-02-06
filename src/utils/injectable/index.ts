import { Container } from "inversify";
import { DbService } from "./DbService";
import { AppService } from "./AppService";
import { TodoService } from "./TodoService";

export const appContainer = new Container();

appContainer.bind(AppService).to(AppService).inSingletonScope();
appContainer.bind(DbService).to(DbService).inSingletonScope();
appContainer.bind(TodoService).to(TodoService).inSingletonScope();

export { DbService, AppService, TodoService };
