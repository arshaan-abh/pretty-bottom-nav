"use client";
import { type FC, useEffect } from "react";
import navItems from "@/constants/nav-items";

const InitialRouteSet: FC = () => {
  useEffect(() => {
    if (location.hash === "") location.hash = "#" + navItems[0].id;
  }, []);

  return null;
};

export default InitialRouteSet;
