const Card = () => {
  return (
    <div className="flex justify-between bg-white shadow-md p-3 items-center">
      <div>
        <p>Name</p>
        <div className="flex items-center gap-1">
          <img
            src="https://static-00.iconduck.com/assets.00/telephone-icon-1024x1024-wdmz71v9.png"
            alt="phone icon"
            className="w-4 h-4"
          />
          <p>Phone</p>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="https://openclipart.org/image/2000px/286608"
            alt=""
            className="w-4"
          />
          <p>Email</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-yellow-400 py-1 px-2 rounded-sm">Edit</button>
        <button className="bg-red-500 text-white py-1 px-2 rounded-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
