import { Container } from "inversify";
import { DataBaseInjectable } from "./container/DataBase.injectable";

export const appContainer = new Container();

appContainer.bind(DataBaseInjectable).to(DataBaseInjectable).inSingletonScope();
