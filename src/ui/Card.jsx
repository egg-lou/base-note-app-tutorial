const Card = ({ children, className = "" }) => {
  return (
    <div className={`
      bg-white 
      rounded-lg 
      shadow-md 
      hover:shadow-lg 
      transition-shadow 
      duration-300 
      p-4 
      border-2 
      border-gray-100
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
