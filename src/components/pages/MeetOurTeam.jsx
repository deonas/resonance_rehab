import React, { forwardRef } from "react";

const MeetOurTeam = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-blue-600 h-screen w-full flex items-center justify-center text-white text-4xl"
    >
      MeetOurTeam
    </div>
  );
});

export default MeetOurTeam;
