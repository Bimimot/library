import { NavLink } from "react-router-dom";
import SvgIcon from "../../icons/SvgIcon";
import { pages } from "../../../data/composition";

export const HeaderNav = () => (
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
