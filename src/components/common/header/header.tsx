import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "../";
import StyleTheme from "../../../helpers/StyleTheme";

const styleTheme = new StyleTheme("LIGHT");

export const Header: FC = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/about">О проекте</NavLink>
          </li>
          <li>
            <NavLink to="/books">Книги</NavLink>
          </li>
          <li>
            <NavLink to="/rules">Правила и стоимость </NavLink>
          </li>
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
