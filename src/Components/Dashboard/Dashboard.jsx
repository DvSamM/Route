import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  // const { id, username } = useParams();
  // let savedID = localStorage.getItem('id');
  // let savedUN = localStorage.getItem('username');
  // let ids = JSON.parse(savedID);
  // let savedUNs = JSON.parse(savedUN)

  // useEffect(() => {
  //   console.log(ids);
  // }, [id, username]);
  const { email } = useParams();
  
  const [userMail, setuserMail] = useState("");
  const fetchEmail = () => {
    let savedEmail = JSON.parse(localStorage.getItem("userInfo"));
    
    savedEmail.map((user)=>{
      if (user.email === email) {
        setuserMail(user.email);
      }
    })

  };

  useEffect(() => {
    fetchEmail();
  }, []);
 
  return (
    <Container fluid className="p-0" style={{ overflowX: "hidden" }}>
      {/* Navbar with Hamburger */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">SAM'S SCH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-lg-none ">
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#grades">Grades</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/user/signin" className="nav-link">
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Layout */}
      <Row noGutters style={{ height: "100vh" }}>
        <Col
          lg={2}
          className="bg-dark d-none d-lg-flex flex-column p-3"
          style={{ height: "100%" }}
        >
          {/* Sidebar for larger screens */}
          <Nav className="flex-column text-white">
            <Nav.Link href="#profile" className="text-white">
              Profile
            </Nav.Link>
            <Nav.Link href="#courses" className="text-white">
              Courses
            </Nav.Link>
            <Nav.Link href="#grades" className="text-white">
              Grades
            </Nav.Link>
            <Nav.Link href="#settings" className="text-white">
              Settings
            </Nav.Link>
            <Link to="/user/signin" className="nav-link text-white">
              Logout
            </Link>
          </Nav>
        </Col>
        <Col
          lg={10}
          className="p-4"
          style={{ height: "100%", overflowY: "auto" }}
        >
          <h1 className="text-center">WELCOME TO YOUR DASHBOARD, {userMail}</h1>
          {/* Add your main content here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
