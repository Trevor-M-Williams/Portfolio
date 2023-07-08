import { createContext, useContext, useState } from "react";

export const PuzzleContext = createContext();

export function usePuzzle() {
  return useContext(PuzzleContext);
}

function PuzzleProvider({ children }) {
  const [test, setTest] = useState(false);
  const [test2, setTest2] = useState(false);
  return (
    <PuzzleContext.Provider value={{ test, setTest, test2, setTest2 }}>
      {children}
    </PuzzleContext.Provider>
  );
}

export default PuzzleProvider;
