import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postTodos } from "../api";

export const Add = () => {
  const queryClient = useQueryClient();
  const [value, setValue] = useState("");

  const mutation = useMutation((title: string) => postTodos({ title }), {
    onSuccess: () => queryClient.fetchQuery({ queryKey: "todos" }),
  });

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          mutation.mutate(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};
