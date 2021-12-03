import { useQuery } from "react-query";
import { Item } from ".";
import { getTodos } from "../api";

export const List = () => {
  const { data } = useQuery({
    queryKey: "getTodos",
    queryFn: () => getTodos(),
  });

  console.log(data);

  return (
    <div>
      <Item title={"Title"} id={"Oke"} key={"Oke"} />
    </div>
  );
};
