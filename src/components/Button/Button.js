const Button = ({ text, event }) => {
  return (
    <button onClick={event} className="btn-grad">
      {text}
    </button>
  );
};

export default Button;
