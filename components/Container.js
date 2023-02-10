import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-6xl mx-auto py-4 flex flex-col">
      {children}
    </div>
  );
}

export default Container;
