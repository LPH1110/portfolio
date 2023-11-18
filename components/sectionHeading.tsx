import React from "react";

const SectionHeading = ({
  children,
  align,
}: {
  children: string;
  align: string;
}) => {
  return (
    <h2 className={`mb-8 text-3xl font-medium capitalize text-${align}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
