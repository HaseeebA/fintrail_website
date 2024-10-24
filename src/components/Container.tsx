import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container px-4 py-4 sm:px-6 sm:py-6 md:px-0 md:py-8 mx-auto ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}