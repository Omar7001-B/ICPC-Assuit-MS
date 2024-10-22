import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SideBarHomeNavLink({about,linkto,shadowColor,setShadowColor}){
    return(
        <NavLink
        to={linkto}
        style={{
          textDecoration: "none",
          color: "#dfdfdf",
          textShadow: `20px 20px 10px ${shadowColor},-20px 20px 10px ${shadowColor},20px -20px 10px ${shadowColor},-20px -20px 10px ${shadowColor}`,
        }}
        onPointerEnter={() => {
            setShadowColor("red");
        }}
        onPointerLeave={() => {
            setShadowColor("black");
        }}
      >
        {about}
      </NavLink>
    )
}