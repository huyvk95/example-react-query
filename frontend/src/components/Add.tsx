import { useState } from "react";

export const Add = () => {
  const [value, setValue] = useState("");

  const onClick = () => {
    setValue("");
  };

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
