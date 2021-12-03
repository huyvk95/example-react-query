import { TodoType } from "../types";

export const Item: React.FC<TodoType> = ({ id, title }) => {
  return <div>{title}</div>;
};
