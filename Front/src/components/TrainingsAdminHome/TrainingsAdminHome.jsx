import { useEffect, useState } from "react";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function TrainingsAdminHome() {
    const navigate=useNavigate();
  const [trainings, setTrainings] = useState([]);
  const getTrainings = async () => {
    try {
      const response = await axiosInstance.get("/api/trainings/all");
      setTrainings(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("There is Error: ", error.message);
    }
  };
  const deleteTraining = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axiosInstance.delete("/api/trainings/", {
        headers: {
          id: id,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log("There is Error: ", error.message);
    }
  };
  useEffect(() => {
    getTrainings();
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
      {trainings.length > 0
        ? trainings.map((training) => {
            return (
              <Card
                key={training._id}
                style={{
                  width: "20rem",
                  height: "35vh",
                  backgroundColor: "#dfdfdf",
                  marginBottom: "20px",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ height: "5vh" }}>
                    {training.title}
                  </Card.Title>
                  <Card.Title>{training.level}</Card.Title>
                  <Card.Text style={{ height: "8vh", color: "#ca5757" }}>
                    Requirements: {training.requirements.join(" || ")}
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexFlow: "row wrap",
                    }}
                  >
                    <Button
                      variant="outline-success"
                      style={{ margin: "3px 10px" }}
                      onClick={() => {console.log(training.participants);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outline-danger"
                      style={{ margin: "3px 10px" }}
                      onClick={() => {
                        deleteTraining(training._id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outline-secondary"
                      style={{ margin: "3px 10px" }}
                      onClick={() => {navigate(`/adminhome/traineesfortraining/${training._id}`)}}
                    >
                      Trainees
                    </Button>
                    <Button
                      variant="outline-dark"
                      style={{ margin: "3px 10px" ,width:"100%"}}
                      onClick={() => {navigate(`/adminhome/applicationsfortrainings/${training._id}`)}}
                    >
                      Applicants
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })
        : `No Training Available`}
    </div>
  );
}
