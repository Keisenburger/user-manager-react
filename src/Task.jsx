import { useState } from "react";
const Task = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="flex flex-col items-center mt-10  gap-3">
      <input
        type="text"
        placeholder="Name"
        className="border w-[250px] p-1 rounded-lg bg-gray-100"
        value={input.name}
        onChange={(event) => {
          setInput({ ...input, name: event.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Email"
        className="border w-[250px] p-1 rounded-lg bg-gray-100"
        value={input.email}
        onChange={(event) => {
          setInput({ ...input, email: event.target.value });
        }}
      />
      {/* <button className="">Submit</button> */}
      <p>name: {input.name}</p>
      <p>email: {input.email}</p>
    </div>
  );
};

export default Task;
