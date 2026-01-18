import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition-all duration-300 font-semibold font-urbanist active:scale-95";

  const variants = {
    primary:
      "bg-button-main text-secondary-color hover:shadow-lg hover:scale-105",
    secondary:
      "bg-secondary-color text-primary-color hover:bg-secondary-color/90",
    outline:
      "border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm min-w-[80px]",
    md: "px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base min-w-[100px] md:min-w-[120px]",
    lg: "px-8 py-3 md:px-10 md:py-4 text-base md:text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
