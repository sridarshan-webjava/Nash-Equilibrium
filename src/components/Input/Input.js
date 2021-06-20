const Input = ({ onInputChange }) => {
  return (
    <input
      type="text"
      onChange={onInputChange}
      placeholder="Enter your Nickname"
    />
  );
};

export default Input;
