/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "react-bootstrap/Table";
export default function TraineesForTraining({trainees}) {
    console.log(trainees);
    
  return (
    <>
      <Table striped bordered hover>
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
          {trainees.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.firstName+" "+user.lastName}</td>
                <td>{user.level}</td>
                <td>{user.university}</td>
                <td>{user.faculty}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
