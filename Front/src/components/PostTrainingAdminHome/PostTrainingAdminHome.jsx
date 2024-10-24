// src/components/CreateTraining/CreateTraining.js
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const PostTrainingAdminHome = () => {
  const navigate = useNavigate(); // Initialize the hook

  const [trainingData, setTrainingData] = useState({
    title: "",
    level: "",
    session: "",
    audience: [],
    start: "",
    method: "",
    location: "",
    requirements: [],
    deadline: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation rules based on Mongoose model
  const validate = () => {
    const newErrors = {};

    // Title validation (required)
    if (!trainingData.title) newErrors.title = "Title is required";

    // Level validation (required)
    if (!trainingData.level) newErrors.level = "Level is required";

    // Start date validation (required and must be a valid date)
    if (!trainingData.start) newErrors.start = "Start date is required";
    else if (new Date(trainingData.start) < new Date())
      newErrors.start = "Start date must be in the future";

    // Method validation (required)
    if (!trainingData.method) newErrors.method = "Method is required";

    // Location validation (required)
    if (!trainingData.location) newErrors.location = "Location is required";

    // Deadline validation (required and must be after the start date)
    if (!trainingData.deadline) newErrors.deadline = "Deadline is required";
    else if (new Date(trainingData.deadline) <= new Date(trainingData.start))
      newErrors.deadline = "Deadline must be after the start date";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setTrainingData((prevData) => ({
      ...prevData,
      [name]: value.split(","), // assuming comma-separated input for arrays
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, submit the form

      try {
        console.log(trainingData);

        const response = await axiosInstance.post(
          "/api/trainings",
          trainingData
        ); // Adjust the endpoint as necessary
        console.log("Training created:", response.data);
        setSubmitted(true);
        navigate("/adminhome");
        // Optionally reset the form or redirect
      } catch (error) {
        console.error("Error creating training:", error);
      }
    } else {
      setSubmitted(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ padding: "50px" }}>
      {submitted && (
        <Alert variant="success">Training created successfully!</Alert>
      )}

      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={trainingData.title}
          onChange={handleChange}
          isInvalid={!!errors.title}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formLevel">
        <Form.Label>Level</Form.Label>
        <Form.Control
          as="select"
          name="level"
          value={trainingData.level}
          onChange={handleChange}
          isInvalid={!!errors.level}
          required
        >
          <option value="">Select level</option>
          <option value="newcomer">Newcomer</option>
          <option value="phase1">Phase 1</option>
          <option value="phase2">Phase 2</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.level}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formSession">
        <Form.Label>Session</Form.Label>
        <Form.Control
          as="select"
          name="session"
          value={trainingData.session}
          onChange={handleChange}
        >
          <option value="">Select session</option>
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formAudience">
        <Form.Label>Audience (comma-separated)</Form.Label>
        <Form.Control
          type="text"
          name="audience"
          value={trainingData.audience.join(",")}
          onChange={handleArrayChange}
        />
      </Form.Group>

      <Form.Group controlId="formStart">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          name="start"
          value={trainingData.start}
          onChange={handleChange}
          isInvalid={!!errors.start}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.start}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formMethod">
        <Form.Label>Method</Form.Label>
        <Form.Control
          as="select"
          name="method"
          value={trainingData.method}
          onChange={handleChange}
          isInvalid={!!errors.method}
          required
        >
          <option value="">Select method</option>
          <option value="online">Online</option>
          <option value="onsite">Onsite</option>
          <option value="hybrid">Hybrid</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.method}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={trainingData.location}
          onChange={handleChange}
          isInvalid={!!errors.location}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.location}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formRequirements">
        <Form.Label>Requirements (comma-separated)</Form.Label>
        <Form.Control
          type="text"
          name="requirements"
          value={trainingData.requirements.join(",")}
          onChange={handleArrayChange}
        />
      </Form.Group>

      <Form.Group controlId="formDeadline">
        <Form.Label>Deadline</Form.Label>
        <Form.Control
          type="date"
          name="deadline"
          value={trainingData.deadline}
          onChange={handleChange}
          isInvalid={!!errors.deadline}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.deadline}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Training
      </Button>
    </Form>
  );
};

export default PostTrainingAdminHome;
