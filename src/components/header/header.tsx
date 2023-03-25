import { FC } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { HeaderLogo } from "./header-logo";
import { HeaderNav } from "./header-nav";

export const Header: FC = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderNav />
      <ThemeSwitcher />
    </div>
  );
};


