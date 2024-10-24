import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";

export default function ApplicationsForTrainings() {
  const { id } = useParams();
  const [applications, setApplications] = useState([]);
  const getApplications = async () => {
    try {
      const response = await axiosInstance.get("/api/Applications/training", {
        headers: {
          id: id,
        },
      });
      console.log(response);
      setApplications(response.data.data);
    } catch (error) {
      console.log("There is Error: ", error.message);
    }
  };
  useEffect(() => {
    getApplications();
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
          </tr>
        </thead>
        <tbody>
          {applications.map((user,index) => {
            return (
              <tr key={user._id}>
                <td>{index+1}</td>
                <td>{user.fName + " " + user.lName}</td>
                <td>{user.level}</td>
                <td>{user.university}</td>
                <td>{user.faculty}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
