import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SideBarNavLink({about,linkto,shadowColor,setShadowColor}){
    return(
        <NavLink
        to={linkto}
        style={{
          textDecoration: "none",
          color: "#dfdfdf",
          textShadow: `20px 20px 15px ${shadowColor},-20px 20px 15px ${shadowColor},20px -20px 15px ${shadowColor},-20px -20px 15px ${shadowColor}`,
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