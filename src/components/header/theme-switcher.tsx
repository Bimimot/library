import { useState, useCallback, memo } from "react";
import StyleTheme from "../../helpers/StyleTheme";
import { SvgIcon } from "../";

const styleTheme = new StyleTheme("LIGHT");

export const ThemeSwitcher = memo(() => {
  const [on, setOn] = useState(styleTheme.currentTheme === "DARK");

  const onSwitch = useCallback(() => {
    const newMode = !on;
    setOn(newMode);
    styleTheme.setTheme(newMode ? "DARK" : "LIGHT");
  }, [on]);

  return (
    <div className={`switcher switcher_mode_${on ? "dark" :"light" }`}>
      <div className="switcher__wheel" onClick={onSwitch}>
        <span className="switcher__icon">
          <SvgIcon name="sun" />
        </span>
        <span className="switcher__icon">
          <SvgIcon name="moon" />
        </span>
      </div>
    </div>
  );
});
