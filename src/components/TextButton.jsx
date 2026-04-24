import "../styles/TextButton.css";

const TextButton = ({
  children,
  variant = "ghost",
  size = "md",
  fontWeight = "bold",
  onClick,
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} btn--fw-${fontWeight}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
