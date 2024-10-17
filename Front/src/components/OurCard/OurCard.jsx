import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsCursor } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function OurCard({ src, alt, name, info, link }) {
  const [shadow,setShadow]=useState("0px 0px 0px white");
  return (
    <Card 
    className="m-auto" 
    style={{ width: "18rem", border: "0px" ,boxShadow:shadow}}
    onPointerEnter={()=>{
      setShadow(`
        20px 20px 35px rgb(255,0,0,0.5),
        -20px 20px 35px rgb(255,0,0,0.5),
        20px -20px 35px rgb(255,0,0,0.5),
        -20px -20px 35px rgb(255,0,0,0.5)
        `)
        BsCursor("pointer")
    }}
    onPointerLeave={()=>{setShadow(`0px 0px 0px white`)}}
    >
      <Card.Img
        variant="top"
        src={src}
        alt={alt}
        width={"288px"}
        height={"288px"}
      />
      <Card.Body style={{ height: "170px" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{info}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={link} target="_blank">
        <Button variant="dark">Linkedin</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
