const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  type = "button"
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 flex items-center";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
