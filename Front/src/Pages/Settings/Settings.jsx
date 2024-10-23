import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

export default function Settings() {
    const navigate = useNavigate();
    const [logoShadow, setLogoShadow] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    // State to hold user data
    const [formData, setFormData] = useState({
        personalInfo: {
            firstName: "John",
            lastName: "Doe",
            phone: "123456789",
            nationalId: "987654321",
            government: "SomeGovernment",
            city: "SomeCity",
        },
        academicInfo: {
            university: "SomeUniversity",
            faculty: "Engineering",
            level: "3rd Year",
            academicEmail: "john.doe@university.edu",
        },
        accountInfo: {
            gmail: "john.doe@gmail.com",
            password: "********",
            confirmPassword: "********",
        },
        competitiveInfo: {
            codeforcesHandle: "john_doe",
            virtualJudgeHandle: "jdoe_vjudge",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated User Data:", formData);
        // Here you can add the API call to save the updated user data
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
                            Settings
                        </p>
                        <Form onSubmit={handleSubmit}>
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
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="gmail"
                                            value={formData.accountInfo.gmail}
                                            onChange={handleChange}
                                            placeholder="Gmail"
                                        />
                                        <label>Gmail</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="password"
                                            type="password"
                                            value={formData.accountInfo.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                        />
                                        <label>Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="confirmPassword"
                                            type="password"
                                            value={formData.accountInfo.confirmPassword}
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
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            name="codeforcesHandle"
                                            value={formData.competitiveInfo.codeforcesHandle}
                                            onChange={handleChange}
                                            placeholder="Codeforces Handle"
                                        />
                                        <label>Codeforces Handle</label>
                                    </Form.Floating>
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

                            <Button variant="primary" onClick={prevStep} disabled={currentStep === 1}>
                                Previous
                            </Button>
                            <Button variant="primary" onClick={nextStep} disabled={currentStep === totalSteps}>
                                Next
                            </Button>
                            {currentStep === totalSteps && (
                                <Button variant="success" type="submit">
                                    Save Changes
                                </Button>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
