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
      className={`}abosulute z-[-1] border-l dark:border-[#ffffff20] border-[#00000020] px-4 ${className}`}
    >
      {children}
    </main>
  );
};

export default PageMain;
