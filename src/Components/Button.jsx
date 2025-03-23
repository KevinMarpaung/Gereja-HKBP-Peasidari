const Button = (props) => {
  const { text, background, color } = props;
  return (
    <div>
      <button
        className={`cursor-pointer border border-white rounded-md p-2 ${background} ${color}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
