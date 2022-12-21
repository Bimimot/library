import React from "react";
import Books from "./icons-svg/IconBooks";
import Rules from "./icons-svg/IconRules";
import About from "./icons-svg/IconAbout";
import Sun from "./icons-svg/IconSun";
import Moon from "./icons-svg/IconMoon";

const componentsLib= {
  books: Books,
  about: About,
  rules: Rules,
  sun: Sun,
  moon: Moon,
};

const SvgIcon = React.memo((props: TIconSvg) => {
  let { name, ...iconAttrs } = props;
  const Icon = componentsLib[name as keyof typeof componentsLib];
  return <Icon {...iconAttrs} />;
});

export default SvgIcon;

export type TIconSvg = {
  name: TIconSvgName;
  size?: string;
};

export type TIconSvgName = string;
