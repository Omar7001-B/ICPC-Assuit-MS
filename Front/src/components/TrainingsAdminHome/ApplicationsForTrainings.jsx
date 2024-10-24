import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Button from "react-bootstrap/Button";

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
      setApplications(response.data.data);
    } catch (error) {
      console.log("There is Error: ", error.message);
    }
  };
  const reply= async(applicationId,status,comment)=>{
    try{
      // eslint-disable-next-line no-unused-vars
      const response=await axiosInstance.post("/api/Applications/changeStatus",{
        applicationid:applicationId,
        status:status,
        comment:comment
      });
      window.location.reload();
    }catch(error){
      console.log("There is Error: ", error.message);
    }
  }
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
                <td>{user.user.firstName + " " + user.user.lastName}</td>
                <td>{user.user.level}</td>
                <td>{user.user.university}</td>
                <td>{user.user.faculty}</td>
                <td style={{ textAlign: "center" }}>
                  <Button variant="outline-success" style={{ width: "60%" }}
                  onClick={()=>{
                    reply(user._id,"accepted","");
                  }}>
                    Accept
                  </Button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Button variant="outline-danger" style={{ width: "60%" }}
                  onClick={()=>{
                    reply(user._id,"rejected","");
                  }}>
                    Reject
                  </Button>
                </td>
              </tr>
            );
          },)}
        </tbody>
      </Table>
    </div>
  );
}
