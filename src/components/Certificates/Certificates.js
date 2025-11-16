import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import aiSummit from "../../Assets/Certificates/AI_summit_Image.jpg"
import collaboration from "../../Assets/Certificates/Collaboration_ALIGNMENT.jpg"
import innovativeThinking from "../../Assets/Certificates/Creative_Innovative_Thinking.jpg"
import managerialExcellence from "../../Assets/Certificates/Developing_Managerial_Excellence.jpg"
import digitalTraining from "../../Assets/Certificates/Digital_Training_Warrior.jpg"
import EOM_AUGUST from "../../Assets/Certificates/EOM_Aug_2023.jpg"
import EOM_JUNE from "../../Assets/Certificates/EOM_June_2023.jpg"
import EOM_MARCH from "../../Assets/Certificates/EOM_March_2024.jpg"
import engageConsultants from "../../Assets/Certificates/Engage_consultants_FUEL.jpg"
import franklinCovey from "../../Assets/Certificates/Franklin_Covey_Seven_habits_highly_effective_people.jpg"
import HMM from "../../Assets/Certificates/Harvard_Manage_Mentor.jpg"
import impactfulManagement from "../../Assets/Certificates/Impactfull_management_PTCL.jpg"
import lums from "../../Assets/Certificates/LUMS.png"
import ownership from "../../Assets/Certificates/Ownership_Execution.jpg"
import pmp from "../../Assets/Certificates/PMP_TRAINING.jpg"
import fuel from "../../Assets/Certificates/PTCL_FUEL.jpg"
import NamasteDevJS from "../../Assets/Certificates/NamasteDevCertificate.webp"
import WebDesign from "../../Assets/Certificates/WebDesign.png"
import AlgorithmCourse from "../../Assets/Certificates/Algorithms_DataStructures.png"
import Card from "../Cards/Cards";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my Certificates and Courses i Completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <Card
              imgPath={NamasteDevJS}
              isBlog={false}
              title="NamasteDev Javascript"
              description="Completed the Namaste JavaScript course, a comprehensive deep-dive into JavaScript fundamentals and internal mechanics. The course strengthened my understanding of how JavaScript works under the hood, enabling me to write more predictable, efficient, and error-free code."
              isAchievement="NamasteDev"
            />
          </Col>
          <Col md={4} className="project-card">
            <Card
              imgPath={AlgorithmCourse}
              isBlog={false}
              title="Algorithm Course"
              description="Completed the JavaScript Data Structures and Algorithms certification from FreeCodeCamp, gaining a solid foundation in core algorithmic concepts and problem-solving techniques essential for modern JavaScript development."
              isAchievement="FreeCodeCamp"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card
              imgPath={WebDesign}
              isBlog={false}
              title="Web Design course"
              description="Completed the Responsive Web Design certification from FreeCodeCamp, covering the core building blocks of modern web development — HTML, CSS, and Bootstrap. This course focused on designing clean, responsive, and user-friendly web interfaces."
              isAchievement="FreeCodeCamp"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
