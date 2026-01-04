import React, { forwardRef } from "react";
import Container from "../ui/Container";

const Approach = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-green-700 min-h-screen py-20 w-full">
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-white">Our Approach</h1>
        <p className="text-white">Approaches content goes here.</p>
      </Container>
    </div>
  );
});

export default Approach;
