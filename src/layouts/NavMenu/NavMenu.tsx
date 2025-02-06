import React, { useMemo } from "react";
import { useLocation } from "wouter";
import { APP_ROUTE } from "../../config";
import { NavMenuItem } from "./NavMenuItem/NavMenuItem";

export interface NavMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

export const NavMenu: React.FC<NavMenuProps> = ({ className, style }) => {
  const [location, setLocation] = useLocation();

  const matchedRoute = useMemo(() => {
    return (
      APP_ROUTE.find((route) => {
        return route.path === location;
      }) || APP_ROUTE[0]
    );
  }, [location]);

  return (
    <div className="">
      {APP_ROUTE.map((route) => (
        <NavMenuItem
          key={route.path}
          active={route.path === matchedRoute.path}
          onClick={() => {
            setLocation(route.path);
          }}>
          {route.title}
        </NavMenuItem>
      ))}
    </div>
  );
};
