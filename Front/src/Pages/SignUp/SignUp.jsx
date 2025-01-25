import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ICPCLogo from "../../assets/Images/ICPC-Logo.png"
export default function Signup() {
  const navigate = useNavigate();
  const [logoShadow, setLogoShadow] = useState(false && currentStep == 3);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [isGmailVerified, setIsGmailVerified] = useState(true);
  // State to hold form data
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
      isGmailVerified: false,
    },
    competitiveInfo: {
      codeforcesHandle: "",
      isCodeforcesVerified: false,
      virtualJudgeHandle: "",
    },
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    const stepKeys = [
      "personalInfo",
      "academicInfo",
      "accountInfo",
      "competitiveInfo",
    ];
    const stepKey = stepKeys[currentStep - 1];

    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: {
        ...prevData[stepKey],
        [name]: value,
      },
    }));
  };

  // Validation Functions for Each Step
  let newErrors = {};
  const validateStep = () => {
    if (currentStep === 1) {
      const { firstName, lastName, phone, nationalId, government, city } =
        formData.personalInfo;
      if (
        !firstName ||
        firstName.length < 3 ||
        firstName.length > 50 ||
        !/^[a-zA-Z]+$/.test(firstName)
      )
        newErrors.firstName =
          "First name must be between 3 and 50 characters and only contain letters";
      if (
        !lastName ||
        lastName.length < 3 ||
        lastName.length > 50 ||
        !/^[a-zA-Z]+$/.test(lastName)
      )
        newErrors.lastName =
          "Last name must be between 3 and 50 characters and only contain letters";
      if (!phone || !/^(010|011|012|015)\d{8}$/.test(phone))
        newErrors.phone =
          "Phone number must be 11 digits starting with 010, 011, 012, or 015";
      if (!nationalId || !/^\d{14}$/.test(nationalId))
        newErrors.nationalId = "National ID must be exactly 14 digits";
      if (!government) newErrors.government = "Government is required";
      if (!city) newErrors.city = "City is required";
    }

    if (currentStep === 2) {
      const { university, faculty, level, academicEmail } =
        formData.academicInfo;

      if (!university || !isNaN(university))
        newErrors.university =
          "University is required and must enter valid university name";
      if (!faculty || !isNaN(faculty))
        newErrors.faculty =
          "Faculty is required and must input valid faculty name ";
      if (!level || isNaN(level) || level < 1 || level > 5) {
        newErrors.level = "Level is required and must be between 1 and 5";
      }
      if (
        !academicEmail &&
        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(academicEmail)
      )
        newErrors.academicEmail = "Academic Email is invalid";
    }

    if (currentStep === 3) {
      const { gmail, verificationCode, password, confirmPassword } =
        formData.accountInfo;
      if (!gmail || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(gmail))
        newErrors.gmail = "Gmail is invalid";
      if (!password) newErrors.password = "Password is required";
      if (password !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!verificationCode) {
        newErrors.verificationCode = "Verification code is required";
      }
    }

    if (currentStep === 4) {
      const { codeforcesHandle, virtualJudgeHandle } = formData.competitiveInfo;
      if (codeforcesHandle && !/^[a-zA-Z0-9]+$/.test(codeforcesHandle))
        newErrors.codeforcesHandle =
          "Codeforces handle must contain only letters and numbers";
      if (virtualJudgeHandle && !/^[a-zA-Z0-9]*$/.test(virtualJudgeHandle))
        newErrors.virtualJudgeHandle =
          "Virtual Judge handle must contain only letters and numbers";
    }

    setErrors(newErrors);

    // Log the errors to help debug
    console.log("Validation errors:", newErrors);

    // Check if there are no errors and return true if validation passes
    return Object.keys(newErrors).length === 0;
  };

  // Proceed to next step if valid
  const nextStep = () => {
    if (validateStep() === true) {
      setErrors({}); // Clear previous errors
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const body = {
      firstName: formData.personalInfo.firstName,
      lastName: formData.personalInfo.lastName,
      phone: formData.personalInfo.phone,
      nationalID: formData.personalInfo.nationalId,
      government: formData.personalInfo.government,
      city: formData.personalInfo.city,
      facebook: "facebook",
      university: formData.academicInfo.university,
      faculty: formData.academicInfo.faculty,
      level: formData.academicInfo.level,
      academicEmail: formData.academicInfo.academicEmail,
      gmail: formData.accountInfo.gmail,
      isGmailVerified: formData.accountInfo.isGmailVerified,
      password: formData.accountInfo.password,
      codeforcesHandle: formData.competitiveInfo.codeforcesHandle,
      isCodeforcesVerified: formData.competitiveInfo.isCodeforcesVerified,
      virtualJudgeHandle: formData.competitiveInfo.virtualJudgeHandle,
      roles: "User",
    };

    if (validateStep()) {
      console.log("Form data submitted:", body);
      try {
        console.log("i will tryyyyyyyyyyyyyyyyyyyy");
        response = await axios.post("http://localhost:5001/api/auth/signup", {
          body: body,
        });
        console.log(response);
        if (response.status === "success") alert("regeistred successfully");
      } catch (error) {
        alert("regeistred successfully");
      }
    }

    navigate('/login');

  };

  let hashedCode;
  let gmailGlobal;
  const sendVerificationCode = async () => {
    const { gmail } = formData.accountInfo;
    gmailGlobal = gmail;
    let response;
    console.log("the gmail is ------------- ", gmail);
    if (!gmail) {
      alert("Please enter your email before sending the code.");
      return;
    }
    try {
      console.log("i will tryyyyyyyyyyyyyyyyyyyyyyyy");
      response = await axios.post("http://localhost:5001/api/gmail/sendCode", {
        email: gmail,
      });
      localStorage.hashedCode = response.data.data.verificationCode;
      alert("Verification code sent successfully!");
    } catch (error) {
      console.error("Error sending verification code:", error);
      alert("Failed to send verification code. Please try again.");
    }
  };

  const verifyCode = async () => {
    const { gmail, verificationCode } = formData.accountInfo;
    console.log(verificationCode);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/gmail/checkCode",
        {
          gmail: gmail,
          code: verificationCode,
        }
      );
      let verCodeStatus = response.data.message;
      console.log(verCodeStatus);
      if (verCodeStatus !== "valid") {
        alert("Verification failed. Please check your code and try again.");
        setErrors((prevErrors) => ({
          ...prevErrors,
          verificationCode: "Invalid verification code.",
        }));
        setIsGmailVerified(false); // Set verification status to false
        return;
      }

      alert("Verification successful!");
      setIsGmailVerified(true); // Set verification status to true
      formData.accountInfo.isGmailVerified = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        verificationCode: undefined, // Clear the error if valid
      }));
    } catch (error) {
      console.error("Error during verification:", error);
      alert("Verification failed. Please check your code and try again.");
      setErrors((prevErrors) => ({
        ...prevErrors,
        verificationCode: "Verification failed due to an error.",
      }));
      setIsGmailVerified(false); // Set verification status to false
      formData.accountInfo.isGmailVerified = flase;
    }
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
              src={ICPCLogo}
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
                      isInvalid={!!errors.firstName}
                    />
                    <label>First Name</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="lastName"
                      value={formData.personalInfo.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      isInvalid={!!errors.lastName}
                    />
                    <label>Last Name</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="phone"
                      value={formData.personalInfo.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      isInvalid={!!errors.phone}
                    />
                    <label>Phone</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="nationalId"
                      value={formData.personalInfo.nationalId}
                      onChange={handleChange}
                      placeholder="National ID"
                      isInvalid={!!errors.nationalId}
                    />
                    <label>National ID</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.nationalId}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="government"
                      value={formData.personalInfo.government}
                      onChange={handleChange}
                      placeholder="Government"
                      isInvalid={!!errors.government}
                    />
                    <label>Government</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.government}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="city"
                      value={formData.personalInfo.city}
                      onChange={handleChange}
                      placeholder="City"
                      isInvalid={!!errors.city}
                    />
                    <label>City</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
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
                      isInvalid={!!errors.university}
                    />
                    <label>University</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.university}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="faculty"
                      value={formData.academicInfo.faculty}
                      onChange={handleChange}
                      placeholder="Faculty"
                      isInvalid={!!errors.faculty}
                    />
                    <label>Faculty</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.faculty}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="level"
                      value={formData.academicInfo.level}
                      onChange={handleChange}
                      placeholder="Level"
                      isInvalid={!!errors.level}
                    />
                    <label>Level</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.level}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="academicEmail"
                      value={formData.academicInfo.academicEmail}
                      onChange={handleChange}
                      placeholder="Academic Email"
                      isInvalid={!!errors.academicEmail}
                    />
                    <label>Academic Email</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.academicEmail}
                    </Form.Control.Feedback>
                  </Form.Floating>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h5 style={{ color: "#dfdfdf" }}>Account Information</h5>
                  <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Floating className="flex-grow-1">
                      <Form.Control
                        name="gmail"
                        value={formData.accountInfo.gmail}
                        onChange={handleChange}
                        placeholder="Gmail"
                        isInvalid={!!errors.gmail}
                      />
                      <label>Gmail</label>
                      <Form.Control.Feedback type="invalid">
                        {errors.gmail}
                      </Form.Control.Feedback>
                    </Form.Floating>

                    <Button
                      variant="outline-light"
                      onClick={sendVerificationCode} // Call the function on button click
                      style={{ marginLeft: "10px" }}
                    >
                      Send Code
                    </Button>
                  </Form.Group>

                  <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Floating className="flex-grow-1">
                      <Form.Control
                        name="verificationCode"
                        value={formData.accountInfo.verificationCode}
                        onChange={handleChange}
                        placeholder="Verification Code"
                        isInvalid={!!errors.verificationCode}
                      />
                      <label>Verification Code</label>
                      <Form.Control.Feedback type="invalid">
                        {errors.verificationCode}
                      </Form.Control.Feedback>
                    </Form.Floating>

                    <Button
                      variant="outline-light"
                      onClick={verifyCode}
                      style={{ marginLeft: "10px" }}
                    >
                      Verify
                    </Button>
                  </Form.Group>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="password"
                      type="password"
                      value={formData.accountInfo.password}
                      onChange={handleChange}
                      placeholder="Password"
                      isInvalid={!!errors.password}
                    />
                    <label>Password</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      value={formData.accountInfo.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      isInvalid={!!errors.confirmPassword}
                    />
                    <label>Confirm Password</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Floating>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <h5 style={{ color: "#dfdfdf" }}>
                    Competitive Programming (Optional)
                  </h5>

                  <Form.Group className="mb-3 d-flex align-items-center">
                    <Form.Floating className="flex-grow-1">
                      <Form.Control
                        name="codeforcesHandle"
                        value={formData.competitiveInfo.codeforcesHandle}
                        onChange={handleChange}
                        placeholder="Codeforces Handle"
                        isInvalid={!!errors.codeforcesHandle}
                      />
                      <label>Codeforces Handle</label>
                      <Form.Control.Feedback type="invalid">
                        {errors.codeforcesHandle}
                      </Form.Control.Feedback>
                    </Form.Floating>

                    <Button
                      variant="outline-light"
                      style={{ marginLeft: "10px" }}
                    >
                      Verify
                    </Button>
                  </Form.Group>

                  <Form.Floating className="mb-3">
                    <Form.Control
                      name="virtualJudgeHandle"
                      value={formData.competitiveInfo.virtualJudgeHandle}
                      onChange={handleChange}
                      placeholder="Virtual Judge Handle"
                      isInvalid={!!errors.virtualJudgeHandle}
                    />
                    <label>Virtual Judge Handle</label>
                    <Form.Control.Feedback type="invalid">
                      {errors.virtualJudgeHandle}
                    </Form.Control.Feedback>
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
                    disabled={!isGmailVerified && currentStep == 3} // Disable if not verified
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="outline-light"
                    onClick={handleSubmit}
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
