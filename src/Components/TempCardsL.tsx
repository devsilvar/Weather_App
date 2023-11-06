import React from "react";

const TempCardL = ({
  icon,
  type,
  degree,
}: {
  icon: any;
  type: string;
  degree: string;
}) => {
  return (
    <div>
      <span>{icon}</span>
      <p> {type}</p>
      <h2 className="text-xl lg:text-2xl font-bold">{degree}</h2>
    </div>
  );
};

export default TempCardL;
