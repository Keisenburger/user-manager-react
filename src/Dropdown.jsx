import { useState } from "react";

const Dropdown = () => {
  const data = [
    { name: "Typescript", id: Math.random() },
    { name: "Javascript", id: Math.random() },
    { name: "Go", id: Math.random() },
    { name: "React", id: Math.random() },
    { name: "Python", id: Math.random() },
    { name: "Ruby", id: Math.random() },
    { name: "Rust", id: Math.random() },
    { name: "Java", id: Math.random() },
    { name: "Next.js", id: Math.random() },
  ];

  const [selected, setSelected] = useState(["Typescript"]);
  const addToSelected = (el) => {
    if (!selected.includes(el)) setSelected([...selected, el]);
  };
  const removeFromSelected = (target) => {
    const filteredData = selected.filter((e) => e !== target);
    setSelected(filteredData);
  };

  return (
    <div className="flex items-center mt-20 flex-col gap-4 ">
      <div className="w-[500px] bg-slate-100 border h-[60px] flex items-center p-2 gap-2 overflow-auto  border-black rounded-lg">
        {selected.map((e) => {
          return (
            <div className="border border-blue-700 bg-blue-200 p-1 rounded-md flex items-center gap-1">
              <p className=" text-blue-700 rounded-md px-1">{e}</p>
              <button onClick={() => removeFromSelected(e)}>x</button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col  overflow-auto h-[400px] border border-black  rounded-lg">
        {data.map((element) => {
          return (
            <div
              className="flex justify-start  w-[500px] p-3 hover:bg-slate-200"
              onClick={() => addToSelected(element.name)}
            >
              <p className=" font-bold">{element.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
