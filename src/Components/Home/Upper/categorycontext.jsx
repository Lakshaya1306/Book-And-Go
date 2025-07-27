import React, { createContext, useState } from "react";

export const CategoryContext = createContext(null);

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState("flights");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
