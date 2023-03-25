import React, { ReactNode } from "react";

interface ıProps {
    title:string
  children: ReactNode;
}

const FromWrapper = ({ title,children }: ıProps) => {
  return (
    <div className="flex flex-col">
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div className="flex flex-col gap-[10px]">{children}</div>
    </div>
  );
};

export default FromWrapper;
