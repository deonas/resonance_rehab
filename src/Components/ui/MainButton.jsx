import React from "react";

const MainButton = ({ children, className = "", ...props }) => {
  return (
    <button className={`main-button cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
};

export default MainButton;
