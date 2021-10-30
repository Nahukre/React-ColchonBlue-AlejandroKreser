import { NavLink } from "react-router-dom";
import "./Footer.css";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";

export const Footer = () => {
    return (
        <footer class="pie">

<section>
    <NavLink to=""><img src={facebook} class="pie__redes" alt="facebook"/></NavLink>
    <NavLink to=""><img src={twitter} class="pie__redes"alt="twitter"/></NavLink>
    <NavLink to=""><img src={instagram} class="pie__redes" alt="instagram"/></NavLink>
</section>
</footer>
    );
}
