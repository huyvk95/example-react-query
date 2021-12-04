import { useQuery } from "react-query";
import { Item } from ".";
import { getTodos } from "../api";

export const List = () => {
  const { data } = useQuery({
    queryKey: "todos",
    queryFn: async () => {
      const { data } = await getTodos();
      return data;
    },
  });

  return (
    <div>
      {data?.map((o) => (
        <Item {...o} key={o.id} />
      ))}
    </div>
  );
};
