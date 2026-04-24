import "../styles/IconButton.css";

const IconButton = ({
  children,
  variant = "functional",
  size = "md",
  onClick,
}) => {
  return (
    <button
      className={`icon-btn icon-btn--${variant} icon-btn--${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
