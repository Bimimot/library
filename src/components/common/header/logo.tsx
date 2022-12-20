import { Link } from "react-router-dom";
import logoSrc from "../../../images/logo.png";

export const Logo = () => 
    <Link to="/" className="header__logo">
        <img className="image" src={logoSrc} alt="logo"/>
    </Link>
