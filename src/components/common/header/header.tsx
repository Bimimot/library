import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "./slider";
import StyleTheme from "../../../helpers/StyleTheme";
import { pages } from "../../../data/composition";
import { Logo } from "./logo";
import SvgIcon from "../../icons/SvgIcon";

const styleTheme = new StyleTheme("LIGHT");

export const Header: FC = () => {
  return (
    <div className="header">
      <Logo />
      <HeaderNav />
      <Slider
        isOn={styleTheme.currentTheme === "DARK"}
        callback={(mode: boolean) =>
          styleTheme.setTheme(mode ? "DARK" : "LIGHT")
        }
      />
    </div>
  );
};

const HeaderNav = () => (
  <nav className="header__nav">
    <ul className="header__list">
      {pages.map((item, i) => (
        <li className="header__point" key={i}>
          <NavLink
            className={({ isActive }) =>
              `header__link ${isActive && "header__link_active_on"}`
            }
            to={`/${item.link}`}
          >
            <SvgIcon name={item.icon} />
            <span className="header__text">{item.text.toUpperCase()}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
