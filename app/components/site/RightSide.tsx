import Link from "next/link";
import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 space-y-16 text-textLight">
      <Link href="mailto:rashdevatrealglobe@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          rashdevatrealglobe@gmail.com
        </p>
      </Link>
      <span className="w-[2px] h-20 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
