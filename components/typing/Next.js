import React from "react";

function Next({ handleNext }) {
  return (
    <div
      onClick={handleNext}
      className="flex items-center justify-center absolute top-5 right-5 bg-slate-200 text-slate-800 py-1 px-4 rounded-full cursor-pointer
      hover:bg-slate-300"
    >
      Next
    </div>
  );
}

export default Next;
