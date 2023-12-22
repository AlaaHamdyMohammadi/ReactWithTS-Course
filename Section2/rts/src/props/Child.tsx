import React from "react";

interface ChildProps {
  color: string;
  handlerClick: () => void;
}

export default function Child({ color, handlerClick }: ChildProps) {
  return (
    <div>
      Child Color is {color}
      <button onClick={handlerClick}>Click</button>
    </div>
  );
}

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
