import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "finish your js projects.",
      completed: false,
    },
  ],
  addTodo: (title) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, title) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
