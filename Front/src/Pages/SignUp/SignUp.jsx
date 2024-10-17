import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [logoShadow, setLogoShadow] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const totalSteps = 4;

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div
            style={{
                backgroundColor: "black",
                height: "100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container>
                <Row>
                    <Col
                        md={6}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="/src/assets/Images/ICPC-Logo.png"
                            alt="ICPC Assiut"
                            style={{
                                height: "300px",
                                width: "300px",
                                boxShadow: `0px 0px ${logoShadow ? "40px" : "0px"} red`,
                                borderRadius: "50%",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                navigate("/");
                            }}
                            onPointerEnter={() => setLogoShadow(true)}
                            onPointerLeave={() => setLogoShadow(false)}
                        />
                        <Link
                            to="/"
                            style={{
                                fontSize: "40px",
                                color: "#dfdfdf",
                                textShadow: "2px 4px 5px rgb(255,255,255,0.7)",
                                textDecoration: "none",
                            }}
                        >
                            ICPC Assiut Community
                        </Link>
                    </Col>

                    <Col md={6} style={{ padding: "25px" }}>
                        <p
                            style={{
                                marginBottom: "35px",
                                marginTop: "10px",
                                fontSize: "35px",
                                color: "#dfdfdf",
                                textShadow: "2px 4px 5px rgb(255,255,255,0.7)",
                            }}
                        >
                            Sign Up
                        </p>
                        <Form>
                            {currentStep === 1 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Personal Information</h5>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="First Name" />
                                        <label>First Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Last Name" />
                                        <label>Last Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Phone" />
                                        <label>Phone</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="National ID" />
                                        <label>National ID</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Government" />
                                        <label>Government</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="City" />
                                        <label>City</label>
                                    </Form.Floating>
                                </>
                            )}

                            {currentStep === 2 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Academic Information</h5>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="University" />
                                        <label>University</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Faculty" />
                                        <label>Faculty</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Level" />
                                        <label>Level</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Academic Email" />
                                        <label>Academic Email</label>
                                    </Form.Floating>
                                </>
                            )}

                            {currentStep === 3 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Account Information</h5>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Gmail" />
                                        <label>Gmail</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="password" placeholder="Password" />
                                        <label>Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                        <label>Confirm Password</label>
                                    </Form.Floating>
                                </>
                            )}

                            {currentStep === 4 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Competitive Programming (Optional)</h5>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Codeforces Handle" />
                                        <label>Codeforces Handle</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control placeholder="Virtual Judge Handle" />
                                        <label>Virtual Judge Handle</label>
                                    </Form.Floating>
                                </>
                            )}

                            <div className="d-flex justify-content-between mt-4">
                                {currentStep > 1 && (
                                    <Button
                                        variant="outline-light"
                                        onClick={prevStep}
                                        style={{ width: "100px" }}
                                    >
                                        Previous
                                    </Button>
                                )}
                                {currentStep < totalSteps ? (
                                    <Button
                                        variant="outline-light"
                                        onClick={nextStep}
                                        style={{ width: "100px" }}
                                    >
                                        Next
                                    </Button>
                                ) : (
                                    <Button
                                        // type="submit"
                                        variant="outline-light"
                                        style={{ width: "100px" }}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
