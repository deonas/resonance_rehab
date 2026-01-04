import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen bg-amber-900 w-full flex items-center justify-center text-white text-4xl"
    >
      Contact
    </div>
  );
});

export default Contact;
