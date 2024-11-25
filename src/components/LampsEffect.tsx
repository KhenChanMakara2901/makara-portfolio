import React from "react";

const LampsEffect = ({ text }: { text: string }) => {
  return (
    <h1 className="bg-white dark:bg-dark text-4xl font-semibold text-center">
      <span className="lamp-effect">{text}</span>
    </h1>
  );
};

export default LampsEffect;
