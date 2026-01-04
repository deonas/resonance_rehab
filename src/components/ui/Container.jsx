import React, { forwardRef } from "react";

const Container = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
