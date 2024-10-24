import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Button from "react-bootstrap/Button";

export default function TraineesForTraining() {
  const { id } = useParams();
  const [trainees, setTrainees] = useState([]);
  const getTraining = async () => {
    try {
      const response = await axiosInstance.get("/api/trainings/", {
        headers: {
          id: id,
        },
      });
      setTrainees(response.data.participants);
    } catch (error) {
      console.log("There is Error: ", error.message);
    }
  };
  const filterTrainee=async(_id)=>{
    try{
      console.log(_id+" "+id);
      
      // eslint-disable-next-line no-unused-vars
      const response = await axiosInstance.delete("/api/trainings/participant",{
        headers: {
          id: id,
          participantid: _id,
        },
    });
    window.location.reload();
     }catch(error){
      console.log("There is Error: ", error.message);
    }
  }
  useEffect(() => {
    getTraining();
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Level</th>
            <th>University</th>
            <th>Faculty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.level}</td>
                <td>{user.university}</td>
                <td>{user.faculty}</td>
                <td style={{ textAlign: "center" }}>
                  <Button variant="outline-danger" style={{ width: "60%" }}
                  onClick={()=>{
                    filterTrainee(user._id);
                  }}>
                    Filter
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
