import { FC, PropsWithChildren } from 'react';


export const Header:FC<PropsWithChildren> = (props) => {

    return (
        <div className="header">
            HEADER CONTENT            
            {props.children}
        </div>
    )
}