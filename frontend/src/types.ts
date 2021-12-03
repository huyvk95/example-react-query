export type TodoType = {
  id: string;
  title: string;
};

export type TodoInputType = Omit<TodoType, "id">;
