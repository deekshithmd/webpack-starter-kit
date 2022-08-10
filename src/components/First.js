import React, { useState } from "react";
export const First = () => {
  const [name, setName] = useState("First Component");
  return <h1>{name}</h1>;
};
