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

    // State to hold data for each step
    const [formData, setFormData] = useState({
        personalInfo: {
            firstName: "",
            lastName: "",
            phone: "",
            nationalId: "",
            government: "",
            city: "",
        },
        academicInfo: {
            university: "",
            faculty: "",
            level: "",
            academicEmail: "",
        },
        accountInfo: {
            gmail: "",
            password: "",
            confirmPassword: "",
        },
        competitiveInfo: {
            codeforcesHandle: "",
            virtualJudgeHandle: "",
        },
    });

    // Handler to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        const stepKeys = ["personalInfo", "academicInfo", "accountInfo", "competitiveInfo"];
        const stepKey = stepKeys[currentStep - 1];

        setFormData((prevData) => ({
            ...prevData,
            [stepKey]: {
                ...prevData[stepKey],
                [name]: value,
            },
        }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const verifyCodeforcesHandle = () => {
        if (formData.competitiveInfo.codeforcesHandle.length === 0) {
        } else {
        }
    };

    const handleSubmit = (e) => {
        console.log(formData);
        console.log("Current step:", currentStep);
        //e.preventDefault();
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
                                        <Form.Control
                                            name="firstName"
                                            value={formData.personalInfo.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                        />
                                        <label>First Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="lastName"
                                            value={formData.personalInfo.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                        />
                                        <label>Last Name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="phone"
                                            value={formData.personalInfo.phone}
                                            onChange={handleChange}
                                            placeholder="Phone"
                                        />
                                        <label>Phone</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="nationalId"
                                            value={formData.personalInfo.nationalId}
                                            onChange={handleChange}
                                            placeholder="National ID"
                                        />
                                        <label>National ID</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="government"
                                            value={formData.personalInfo.government}
                                            onChange={handleChange}
                                            placeholder="Government"
                                        />
                                        <label>Government</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="city"
                                            value={formData.personalInfo.city}
                                            onChange={handleChange}
                                            placeholder="City"
                                        />
                                        <label>City</label>
                                    </Form.Floating>
                                </>
                            )}

                            {currentStep === 2 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Academic Information</h5>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="university"
                                            value={formData.academicInfo.university}
                                            onChange={handleChange}
                                            placeholder="University"
                                        />
                                        <label>University</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="faculty"
                                            value={formData.academicInfo.faculty}
                                            onChange={handleChange}
                                            placeholder="Faculty"
                                        />
                                        <label>Faculty</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="level"
                                            value={formData.academicInfo.level}
                                            onChange={handleChange}
                                            placeholder="Level"
                                        />
                                        <label>Level</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="academicEmail"
                                            value={formData.academicInfo.academicEmail}
                                            onChange={handleChange}
                                            placeholder="Academic Email"
                                        />
                                        <label>Academic Email</label>
                                    </Form.Floating>
                                </>
                            )}

                            {currentStep === 3 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Account Information</h5>

                                    {/* Email Input with Send Code Button */}
                                    <Form.Group className="mb-3 d-flex align-items-center">
                                        <Form.Floating className="flex-grow-1">
                                            <Form.Control
                                                name="gmail"
                                                // Value is bound to the Gmail input in formData
                                                value={formData.accountInfo.gmail}
                                                // Updates the formData state on change
                                                onChange={handleChange}
                                                placeholder="Gmail"
                                            />
                                            <label>Gmail</label>
                                        </Form.Floating>
                                        {/* Send Code Button */}
                                        <Button
                                            variant="outline-light"
                                            // Function to send the verification code
                                            // onClick={sendVerificationCode}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Send Code
                                        </Button>
                                    </Form.Group>

                                    {/* Verification Code Input */}
                                    <Form.Group className="mb-3 d-flex align-items-center">
                                        <Form.Floating className="flex-grow-1">
                                            <Form.Control
                                                name="verificationCode"
                                                // Value is bound to the verification code input in formData
                                                value={formData.accountInfo.verificationCode}
                                                // Updates the formData state on change
                                                onChange={handleChange}
                                                placeholder="Verification Code"
                                            />
                                            <label>Verification Code</label>
                                        </Form.Floating>
                                        {/* Verify Button */}
                                        <Button
                                            variant="outline-light"
                                            // Function to verify the entered code
                                            // onClick={verifyCode}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Verify
                                        </Button>
                                    </Form.Group>

                                    {/* Password Inputs */}
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="password"
                                            type="password"
                                            // Value is bound to the password input in formData
                                            value={formData.accountInfo.password}
                                            // Updates the formData state on change
                                            onChange={handleChange}
                                            placeholder="Password"
                                        />
                                        <label>Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="confirmPassword"
                                            type="password"
                                            // Value is bound to the confirm password input in formData
                                            value={formData.accountInfo.confirmPassword}
                                            // Updates the formData state on change
                                            onChange={handleChange}
                                            placeholder="Confirm Password"
                                        />
                                        <label>Confirm Password</label>
                                    </Form.Floating>
                                </>
                            )}



                            {currentStep === 4 && (
                                <>
                                    <h5 style={{ color: "#dfdfdf" }}>Competitive Programming (Optional)</h5>

                                    {/* Codeforces Handle Input with Verify Button */}
                                    <Form.Group className="mb-3 d-flex align-items-center">
                                        <Form.Floating className="flex-grow-1">
                                            <Form.Control
                                                name="codeforcesHandle"
                                                value={formData.competitiveInfo.codeforcesHandle}
                                                onChange={handleChange}
                                                placeholder="Codeforces Handle"
                                            />
                                            <label>Codeforces Handle</label>
                                        </Form.Floating>
                                        {/* Verify Button for Codeforces Handle */}
                                        <Button
                                            variant="outline-light"
                                            // Function to verify the Codeforces handle
                                            onClick={verifyCodeforcesHandle}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Verify
                                        </Button>
                                    </Form.Group>

                                    {/* Virtual Judge Handle Input */}
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="virtualJudgeHandle"
                                            value={formData.competitiveInfo.virtualJudgeHandle}
                                            onChange={handleChange}
                                            placeholder="Virtual Judge Handle"
                                        />
                                        <label>Virtual Judge Handle</label>
                                    </Form.Floating>
                                </>
                            )}


                            <div className="d-flex justify-content-between mt-4">
                                <Button
                                    variant="outline-light"
                                    onClick={prevStep}
                                    disabled={currentStep === 1}
                                    style={{ width: "100px" }}
                                >
                                    Back
                                </Button>
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
                                        onClick={handleSubmit}
                                        variant="outline-light"
                                        style={{ width: "100px" }}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </Form>
                        <div style={{ marginTop: "20px" }}>
                            <Link
                                to="/login"
                                style={{
                                    color: "#dfdfdf",
                                    textDecoration: "none",
                                }}
                            >
                                Already have an account? Login
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
