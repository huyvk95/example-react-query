import { useMutation, useQueryClient } from "react-query";
import { deleteTodos } from "../api";
import { TodoType } from "../types";

export const Item: React.FC<TodoType> = ({ id, title }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation((id: string) => deleteTodos({ id }), {
    onSuccess: () => queryClient.fetchQuery("todos"),
  });

  return (
    <div>
      {title} <button onClick={() => mutation.mutate(id)}>Remove</button>
    </div>
  );
};
