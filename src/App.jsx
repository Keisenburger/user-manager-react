import Card from "./components/Card";
import Input from "./components/Inputs";

function App() {
  return (
    <div className="flex items-center pt-20 flex-col gap-5  bg-gray-100  h-screen">
      <p className=" font-bold text-2xl">User Management</p>
      <div className=" w-[400px] border rounded-lg p-5 flex flex-col gap-5 bg-white shadow-md">
        <Input title={"Name"} />
        <Input title={"Phone"} />
        <Input title={"Email"} />
        <button className="border w-[35%] bg-blue-600 text-white py-2 rounded-md">
          Update User
        </button>
      </div>
      <div className="flex flex-col gap-5 w-[400px]">
        <Card />
        {/* <Card />
        <Card /> */}
      </div>
    </div>
  );
}

export default App;
