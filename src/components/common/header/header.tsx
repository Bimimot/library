import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "./slider";
import StyleTheme from "../../../helpers/StyleTheme";
import { pages } from "../../../data/composition";

const styleTheme = new StyleTheme("LIGHT");

export const Header: FC = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__list">
          {pages.map((item, i) => (
            <li className="" key={i}>
              <NavLink
                className={({ isActive }) =>
                  `header__point ${isActive && "header__point_active_on"}`
                }
                to={`/${item.link}`}
              >
                {item.text.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Slider
        isOn={styleTheme.currentTheme === "DARK"}
        callback={(mode: boolean) =>
          styleTheme.setTheme(mode ? "DARK" : "LIGHT")
        }
      />
    </div>
  );
};
