import Card from "./components/Card";
// import Input from "./components/Inputs";
import { useState } from "react";

function UserManager() {
  const [users, setUsers] = useState([
    {
      name: "Bold",
      phone: "99119911",
      email: "bat@gmail.com",
      id: Math.random(),
    },
  ]);
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [buttonStatus, setButtonStatus] = useState("add");
  const [editUserId, setEditUserId] = useState(null);

  // functions

  onkeydown = (event) => {
    if (event.key === "Enter") addUser();
  };
  const addUser = () => {
    const newUser = {
      name: inputs.name,
      phone: inputs.phone,
      email: inputs.email,
      id: Math.random(),
    };
    if (inputs.name === "" || inputs.email === "" || inputs.phone === "") {
      alert("Enter your information first ");
      console.log(inputs);
    } else {
      setUsers([...users, newUser]);
      setInputs({ name: "", phone: "", email: "" });
    }
  };

  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "Enter") {
  //     buttonStatus === "update" ? addUser() : updateUser();
  //   }
  // });

  const updateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editUserId
        ? {
            ...user,
            name: inputs.name,
            phone: inputs.phone,
            email: inputs.email,
          }
        : user
    );
    setUsers(updatedUsers);
    setButtonStatus("add");
    setEditUserId(null);
    setInputs({ name: "", phone: "", email: "" });
    // setInputs({ name: "", phone: "", email: "" });
  };

  const editUser = (user) => {
    setInputs({ name: user.name, phone: user.phone, email: user.email });
    setButtonStatus("update");
    setEditUserId(user.id);
  };

  const deleteUser = (target) => {
    console.log("test");
    const filteredUsers = users.filter((user) => user.id !== target);
    setUsers(filteredUsers);
  };

  return (
    <div className="flex items-center pt-20 flex-col gap-5  bg-gray-100  h-screen">
      <p className=" font-bold text-2xl">User Management</p>
      <div className=" w-[400px] border rounded-lg p-5 flex flex-col gap-5 bg-white shadow-md ">
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your Name"
            className="border rounded-md p-1 w-full"
            value={inputs.name}
            onChange={(event) =>
              setInputs({ ...inputs, name: event.target.value })
            }
          />
        </div>
        <div>
          <p>Phone</p>
          <input
            type="text"
            placeholder="Enter your phone"
            className="border rounded-md p-1 w-full"
            value={inputs.phone}
            onChange={(event) =>
              setInputs({ ...inputs, phone: event.target.value })
            }
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="border rounded-md p-1 w-full"
            value={inputs.email}
            onChange={(event) =>
              setInputs({ ...inputs, email: event.target.value })
            }
          />
        </div>
        {buttonStatus === "add" ? (
          <button
            className="border w-[35%] bg-blue-600 text-white py-2 rounded-md"
            onClick={addUser}
          >
            Add User
          </button>
        ) : (
          <button
            className="border w-[35%] bg-blue-600 text-white py-2 rounded-md"
            onClick={updateUser}
          >
            Update User
          </button>
        )}
      </div>
      <div className="flex flex-col gap-5 w-[400px]">
        {users.map((user) => {
          return (
            <Card
              name={user.name}
              phone={user.phone}
              email={user.email}
              id={user.id}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserManager;
