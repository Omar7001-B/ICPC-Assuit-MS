import { useEffect, useState } from "react";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function TrainingsHome() {
  const [oneTraining, setOneTraining] = useState({});
  const [trainingsId, setTrainingsId] = useState([]);
  const getTrainings = async () => {
    try {
      const response = await axiosInstance.get("/user");
      setTrainingsId(response);
    } catch (error) {
      console.log("There is Error: " + error.message);
    }
  };
  const getOneTraining = async (id) => {
    try {
      const response = await axiosInstance.get(`/user/${id}`);
      setOneTraining(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTrainings();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "77.4vw",
        height: "100vh",
      }}
    >
      {trainingsId.length > 0
        ? trainingsId.map((id) => {
            setOneTraining("");
            getOneTraining(id);
            const date = new Date();
            if (oneTraining !== "" && date <= oneTraining.deadline) {
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="/Front/src/assets/Images/ICPC-Logo.png"
                />
                <Card.Body>
                  <Card.Title>{oneTraining.title}</Card.Title>
                  <Card.Title>{oneTraining.level}</Card.Title>
                  <Card.Text>
                    requirements: {oneTraining.requirements.join(" || ")}
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
                </Card.Body>
              </Card>;
            }
          })
        : "No Training Avaliable"}
    </div>
  );
}
