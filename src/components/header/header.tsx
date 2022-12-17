import { FC, PropsWithChildren } from "react";
import { Slider } from "../slider/slider";
import StyleTheme from "../../helpers/StyleTheme";

const styleTheme = new StyleTheme("LIGHT");

export const Header: FC<PropsWithChildren> = (props) => {
  return (
    <div className="header">
      HEADER CONTENT
      {props.children}
      <Slider
        isOn={styleTheme.currentTheme === "DARK"}
        callback={(mode: boolean) =>
          styleTheme.setTheme(mode ? "DARK" : "LIGHT")
        }
      />
    </div>
  );
};
