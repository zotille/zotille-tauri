import React, { PropsWithChildren } from "react";
import clsx from "clsx";

export interface NavMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  active?: boolean;
  onClick?: () => void;
}

export const NavMenuItem: React.FC<PropsWithChildren<NavMenuItemProps>> = ({ className, active, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(className, ["pl-4", "py-2", "cursor-pointer"], {
        "bg-gray-100": active,
      })}>
      {children}
    </div>
  );
};
