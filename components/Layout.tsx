import { FC, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <main>{children}</main>;
};
