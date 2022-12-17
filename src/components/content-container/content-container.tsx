import { FC, ReactNode } from "react";

export const ContentContainer: FC<{ children: ReactNode }> = (props) => (
    <div className="container">
        {props.children}
    </div>
);
