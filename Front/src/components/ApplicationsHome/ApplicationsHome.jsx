import { useEffect, useState } from "react";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Card from "react-bootstrap/Card";

export default function ApplicationHome() {
  
  const [applications, setApplications] = useState([]);
  const setStatusColor=(status)=>{
    return ((status==="accepted")?"green":(status==="pending")?"gray":"red");
  }

  const getApplication = async () => {
    try {
      const response = await axiosInstance.get("/api/Applications/user");
      setApplications(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApplication();
  }, []);

  return (
    <div
      style={{
        padding: "25px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        alignItems: "center",
        width: "77.4vw",
        minHeight: "100vh",
      }}
    >
      {applications.length > 0
        ? applications.map((application) => {
            const statusColor= setStatusColor(application.status);
            return (
              <Card
                key={application.id}
                style={{
                  width: "20rem",
                  height: "30vh",
                  backgroundColor: "#dfdfdf",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ height: "5vh" }}>
                    {application.training.title}
                  </Card.Title>
                  <Card.Title>{application.training.level}</Card.Title>
                  <Card.Text style={{ height: "8vh", color: "#ca5757" }}>
                    Requirements:{" "}
                    {application.training.requirements.join(" || ")}
                  </Card.Text>
                  <p style={{ color: statusColor }}>
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </p>
                </Card.Body>
              </Card>
            );
          })
        : `No Applications Available`}
    </div>
  );
}
