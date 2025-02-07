import { useState } from "react";
import SideBarNavLink from "../SideBarNavLink/SideBarNavLink";

export default function SideBarHome() {
  const [shadowColorTrainings, setShadowColorTrainings] = useState("black");
  const [shadowColorApplications, setShadowColorApplications] = useState("black");
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        padding: "90px",
        fontSize: "25px",
         boxShadow:"inset 0px 40px 70px -70px red,inset -65px 0px 30px -80px red"
      }}
    >
      <SideBarNavLink
        about={"Trainings"}
        linkto={"/home"}
        shadowColor={shadowColorTrainings}
        setShadowColor={setShadowColorTrainings}
      />
      <SideBarNavLink
        about={"Applications"}
        linkto={"/home/applications"}
        shadowColor={shadowColorApplications}
        setShadowColor={setShadowColorApplications}
      />
    </div>
  );
}
