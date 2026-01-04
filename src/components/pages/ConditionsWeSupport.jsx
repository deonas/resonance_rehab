import React, { forwardRef } from "react";
import Container from "../ui/Container";

const ConditionsWeSupport = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-amber-700 min-h-screen py-20 w-full">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-white">
          Conditions We Support
        </h1>
        <p className="text-white">
          Content for conditions we support goes here.
        </p>
      </Container>
    </div>
  );
});

export default ConditionsWeSupport;
