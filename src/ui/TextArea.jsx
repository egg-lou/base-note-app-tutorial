import { useState, useEffect, useRef } from 'react';

const TextArea = ({ 
  value, 
  onChange, 
  placeholder, 
  className = "",
  label
}) => {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-gray-700 font-medium">
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          min-h-[100px]
          p-3
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
          resize-none
          ${className}
        `}
      />
    </div>
  );
};

export default TextArea;
