import { useState } from "react";
import SideBarHomeNavLink from "./SideBarHomeNavLink";

export default function SideBarHome() {
  const [shadowColorTrainings, setShadowColorTrainings] = useState("black");
  const [shadowColorStatistics, setShadowColorStatistics] = useState("black");
  const [shadowColorApplications, setShadowColorApplications] = useState("black");
  const [shadowColorMaterials, setShadowColorMaterials] = useState("black");
  const [shadowColorHistory, setShadowColorHistory] = useState("black");
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        padding: "35px",
        fontSize: "25px",
         boxShadow:"inset 0px 40px 70px -70px red,inset -65px 0px 30px -80px red"
      }}
    >
      <SideBarHomeNavLink
        about={"Trainings"}
        linkto={"/home"}
        shadowColor={shadowColorTrainings}
        setShadowColor={setShadowColorTrainings}
      />
      <SideBarHomeNavLink
        about={"Statistics"}
        linkto={"/home/statistics"}
        shadowColor={shadowColorStatistics}
        setShadowColor={setShadowColorStatistics}
      />
      <SideBarHomeNavLink
        about={"Applications"}
        linkto={"/home/applications"}
        shadowColor={shadowColorApplications}
        setShadowColor={setShadowColorApplications}
      />
      <SideBarHomeNavLink
        about={"Materials"}
        linkto={"/home/materials"}
        shadowColor={shadowColorMaterials}
        setShadowColor={setShadowColorMaterials}
      />
      <SideBarHomeNavLink
        about={"History"}
        linkto={"/home/history"}
        shadowColor={shadowColorHistory}
        setShadowColor={setShadowColorHistory}
      />
    </div>
  );
}
