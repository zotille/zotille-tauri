import { MainPage } from "../pages/MainPage/MainPage";
import { TodoList } from "../pages/TodoList/TodoList";

interface Router {
  path: string;
  title: string;
  component: React.ComponentType<any>;
}
export const APP_ROUTE: Router[] = [
  {
    path: "/",
    title: "首页",
    component: MainPage,
  },
  {
    path: "/todo-list",
    title: "Todo",
    component: TodoList,
  },
];
