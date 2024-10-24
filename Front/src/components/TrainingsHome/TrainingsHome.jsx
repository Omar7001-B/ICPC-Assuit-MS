import { useEffect, useState } from "react";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TrainingsHome() {
  const [trainingsId, setTrainingsId] = useState([]);
  const [loadedTrainings, setLoadedTrainings] = useState([]);

  const getTrainings = async () => {
    try {
      const response = await axiosInstance.get("/api/trainings/user/all");
      setTrainingsId(response.data);
    } catch (error) {
      console.log("There is Error: " + error.message);
    }
  };

  const getOneTraining = async (id) => {
    try {
      const response = await axiosInstance.get(`/api/trainings/user/`, {
        headers: {
          id: id,
        },
      });
      return response.data;
    } catch (error) {
      console.log("There is Error: ", error.message);
    }
  };
  const applyTraining= async (id)=>{
    try{
      const training={
        trainingId:id
      }
      // eslint-disable-next-line no-unused-vars
      const response= await axiosInstance.post("/api/Applications/apply",training);
    }catch(error){
      console.log("There is Error: ", error.message);
    }
  }
  useEffect(() => {
    getTrainings();
  }, []);

  useEffect(() => {
    const fetchTrainings = async () => {
      const loadedData = await Promise.all(
        trainingsId.map(async (id) => {
          const training = await getOneTraining(id);
          return training;
        })
      );
      setLoadedTrainings(loadedData);
    };

    if (trainingsId.length > 0) {
      fetchTrainings();
    }
  }, [trainingsId]);

  return (
    <div
      style={{
        padding:"25px",
        display: "flex",
        flexFlow:"row wrap",
        justifyContent:"space-around",
        alignItems: "center",
        width: "77.4vw",
        minHeight: "100vh",
      }}
    >
      {loadedTrainings.length > 0
        ? loadedTrainings.map((training) => {
            const date = new Date();
            if (training && date <= new Date(training.deadline)) {
              return (
                <Card key={training.id} style={{ width: "20rem" ,height:"30vh",backgroundColor:"#dfdfdf"}}>
                  <Card.Body>
                    <Card.Title style={{height:"5vh"}}>{training.title}</Card.Title>
                    <Card.Title>{training.level}</Card.Title>
                    <Card.Text style={{height:"8vh",color:"#ca5757"}}>
                      Requirements: {training.requirements.join(" || ")}
                    </Card.Text>
                    <Button variant="outline-success" 
                    onClick={()=>{
                      applyTraining(training._id);
                      window.location.reload();
                    }}
                    >Apply</Button>
                  </Card.Body>
                </Card>
              );
            }
            return null;
          })
        : `No Training Available`}
    </div>
  );
}
