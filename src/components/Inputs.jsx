const Input = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <input
        type="text"
        placeholder={`Enter your ${props.title}`}
        className="border rounded-md p-1 w-full"
      />
    </div>
  );
};

export default Input;
