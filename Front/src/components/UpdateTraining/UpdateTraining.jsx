// src/components/UpdateTraining/UpdateTraining.js
import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Col, Row, Container } from "react-bootstrap";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTraining = () => {
  const navigate = useNavigate();
  const { trainingId } = useParams(); // Get the training ID from URL params

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

  // Fetch the existing training data on component mount
  useEffect(() => {
    const fetchTraining = async () => {
      try {
        console.log(trainingId);
        const response = await axiosInstance.get(`/api/trainings/`, {
          headers: {
            id: trainingId,
          },
        });
        console.log("retrieve data ", response.data);
        setTrainingData(response.data);
      } catch (error) {
        console.error("Error fetching training data:", error);
      }
    };
    fetchTraining();
  }, [trainingId]);

  // Validation rules based on the Mongoose model
  const validate = () => {
    const newErrors = {};
    if (!trainingData.title) newErrors.title = "Title is required";
    if (!trainingData.level) newErrors.level = "Level is required";
    if (!trainingData.start) newErrors.start = "Start date is required";
    else if (new Date(trainingData.start) < new Date())
      newErrors.start = "Start date must be in the future";
    if (!trainingData.method) newErrors.method = "Method is required";
    if (!trainingData.location) newErrors.location = "Location is required";
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
      [name]: value.split(","), // Handle comma-separated input for arrays
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, submit the update request
      try {
        const response = await axiosInstance.put(
          `/api/trainings/`,
          trainingData,
          {
            headers: {
              id: trainingId,
            },
          }
        );
        console.log();

        console.log("Training updated:", response.data);
        setSubmitted(true);
        navigate("/adminhome");
      } catch (error) {
        console.error("Error updating training:", error);
      }
    } else {
      setSubmitted(false);
    }
  };

  return (
    <Container className="training-form-container">
      <Form onSubmit={handleSubmit}>
        {submitted && (
          <Alert variant="success">Training updated successfully!</Alert>
        )}

        <Row>
          <Col md={6}>
            <Form.Group controlId="formTitle" className="form-group-small">
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
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLevel" className="form-group-small">
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
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formStart" className="form-group-small">
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
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDeadline" className="form-group-small">
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
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formMethod" className="form-group-small">
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
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLocation" className="form-group-small">
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
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group
              controlId="formRequirements"
              className="form-group-small"
            >
              <Form.Label>Requirements (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                name="requirements"
                value={trainingData.requirements.join(",")}
                onChange={handleArrayChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Update Training
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateTraining;
