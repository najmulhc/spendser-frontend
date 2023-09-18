import React from "react";

const PageMain = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={`abosulute  border-l dark:border-[#ffffff20] border-[#00000020] px-4 w-full ${className}`}
    >
      {children}
    </main>
  );
};

export default PageMain;
