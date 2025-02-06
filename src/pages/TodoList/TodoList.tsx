import { Button } from "@/components/ui/button";
import React from "react";
import { TodoEditorDrawer } from "./components/TodoEditorDrawer/TodoEditorDrawer";
export interface TodoListProps {
  className?: string;
  style?: React.CSSProperties;
}

export const TodoList: React.FC<TodoListProps> = ({ className, style }) => {
  return (
    <div className="">
      <Button>Hello</Button>
      <TodoEditorDrawer />
    </div>
  );
};
