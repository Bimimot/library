import React from "react";
import Books from "./icons-svg/IconBooks";
import Rules from "./icons-svg/IconRules";
import About from "./icons-svg/IconAbout";

const componentsLib = {
    books: Books,
    about: About,
    rules: Rules
};

const SvgIcon = React.memo((props: TIconSvg) => {
  let { name, ...iconAttrs } = props;
  const Icon = componentsLib[name];
  return <Icon {...iconAttrs} />;
});

export default SvgIcon;


export type TIconSvg = {
  name: TIconSvgName;
  size?: string;
};

export type TIconSvgName = "books" | "rules" | "about" ;