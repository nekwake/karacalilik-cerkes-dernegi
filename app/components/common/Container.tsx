import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container px-4 md:px-6 lg:px-0">{children}</div>;
};

