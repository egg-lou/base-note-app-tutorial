const Input = ({ 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  className = "",
  label
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-gray-700 font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          px-3
          py-2
          border-2
          border-gray-200
          rounded-lg
          focus:border-blue-400
          focus:ring-2
          focus:ring-blue-200
          outline-none
          transition-all
          font-handwriting
          text-lg
          ${className}
        `}
      />
    </div>
  );
};

export default Input;
