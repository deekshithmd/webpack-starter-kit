import React, { useState } from "react";
export const C = () => {
  const [name, setName] = useState("First");
  return <h1>{name}</h1>;
};
