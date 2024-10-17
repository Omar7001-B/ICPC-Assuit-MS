import { useState } from "react";
import { BsCursor } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function FooterOfLandingPage() {
  const [ colorOfFacebookIcon, setColorOfFacebookIcon ] = useState("white");
  const [ colorOfLinkedinIcon, setColorOfLinkedinIcon ] = useState("white");
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>
        <FaRegCopyright size={"15px"} />
        2024 ICPC Assiut Community.All rights reserved.
        <br />
        <Link
          to={"https://www.facebook.com/icpcassiutt/"}
          target="_blank"
        >
          <FaFacebookSquare
            size={"22px"}
            style={{ color: colorOfFacebookIcon }}
            onPointerEnter={() => {
              BsCursor("pointer");
              setColorOfFacebookIcon("rgb(149,149,149)");
            }}
            onPointerLeave={()=>setColorOfFacebookIcon("white")}
          />
        </Link>{" "}
        <Link
          to={
            "https://www.linkedin.com/company/icpc-assiut/posts/?feedView=all"
          }
          target="_blank"
          >
          <FaLinkedin
            size={"22px"}
            style={{ color: colorOfLinkedinIcon }}
            onPointerEnter={() => {
              BsCursor("pointer");
              setColorOfLinkedinIcon("rgb(149,149,149)");
            }}
            onPointerLeave={()=>setColorOfLinkedinIcon("white")}
          />
        </Link>
      </p>
    </div>
  );
}
