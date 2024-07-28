import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import fypArchitecture from "../../Assets/Projects/fyp_architecture.png";
import mernLearning from './../../Assets/Projects/mern_learning.png';
import footBallMe from './../../Assets/Projects/football_me_app.png';
import aifaApp from './../../Assets/Projects/aifa_project.png';
import orixaApp from './../../Assets/Projects/orixa.png';
import herzmannPortal from './../../Assets/Projects/herzmann_portal.png';
import devPool from './../../Assets/Projects/thedevpool.png';
import brilliantMove from './../../Assets/Projects/brilliant_move.png';
import portfolio from "../../Assets/Projects/portfolio.png";
import ProjectCard from "../Cards/Cards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={footBallMe}
              isBlog={false}
              title="Project - Playfootball ME"
              description="Worked as React Native Developer + Team Lead - Playfootball app is dedicated for football players enthusiasts who would like to play games without the hassle of arranging them. Users can check the matches agenda, select their preferred game and just PLAY!. App will take care of all logistics, from finding enough team players to play the game to arranging the teams with a referee."
              tools='React Native, Strapi , Postgresql, Firebase,  Javascript'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={aifaApp}
              isBlog={false}
              title="Project - Aifa App"
              description="Worked as full stack developer (MERN). A web app designed to
              help SMEs to keep record of their expenses and all kinds of transactions. Its managing company's financial reports, income statement generation and audit related things. Implemented 2FA, OCR and data extraction from pdf like features"
              tools='MongoDB, Express, React, Node.JS, Typescript'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={orixaApp}
              isBlog={false}
              title="Project - Orixa App"
              description="Worked as full stack developer. Orixa is a web portal designed
              for monitoring plant growth. I've retrieved plant data from a firebase and rendered data as markers on a map (based on geolocation points), enabling users to visualize plant location along with its details. Utilized the MapboxGL library for rendering map and then plant markers on it."
              tools='React, MapboxGL, Firebase'
              isAchievement="Focusteck"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
          imgPath={herzmannPortal}
              isBlog={false}
              title="Project - HERZMANN Medical Portal"
              description="Worked as frontend developer. The HERZMANN Medical System includes embedded medical devices used in OT and medical wards. We developed a user portal to track and display metrics of various parameters in surgical rooms. We also developed an admin dashboard to configure devices."
              tools='React, Redux Toolkit, Material UI'
              isAchievement="EMI Fusion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brilliantMove}
              isBlog={false}
              title="Project - Brilliant Move"
              description="Worked as frontend devleper. BMove is a software that allows shoppers to arrange for near-term delivery at the time of sale. It provides Delivery services to pick up furniture and other heavy goods from store or warehouse and deliver to the shopper’s location."
              tools='React, React Native, Typescript'
              isAchievement="EMI Fusion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devPool}
              isBlog={false}
              title="Project - The Dev Pool"
              description="Worked as full stack developer. TheDevpool is a customer-facing website that provides outsourcing services for software development. I have developed it from scratch and made it deliverable."
              tools='React, React-Bootstrap, SCSS, Node.js, Node Mailer'
              isAchievement="EMI Fusion"
            />
          </Col>
          
          
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my personal projects I've developed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fypArchitecture}
              isBlog={false}
              title="Online Homemade Food Ordering System"
              description="I have developed an online homemade food ordering system as my Final Year Project. Its main aim was to simplify and improve the efficiency of the online food ordering process. I have developed three different apps for different kinds of users including customers, chefs, and admin."
              tools='React Native, Node.js, Express, MySQL'
              // ghLink="https://github.com/mrehanali127/customer-module-V1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernLearning}
              isBlog={false}
              title="Room Reservation Web App"
              description="I developed a full-stack room reservation app during ny learning. I have designed a User interface for booking and implemented an admin dashboard for room management. I developed the REST API in Express and Node with a role-based strategy in mind."
              tools='MongoDB, Express, React, Node.js'
              // ghLink="https://github.com/Rehman-Akram/boiler-plate-express"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myChatbot}
              isBlog={false}
              title="My chatbot"
              description="Developed chatbot on my personal data using python with streamlit as frontend. This enables user to create their own personal chatbots."
              ghLink=""
              demoLink="asd"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiplePdfChatbot}
              isBlog={false}
              title="Multiple PDFs chatbot"
              description="In this project, user can train chatbot on manual pdfs. Provide PDFs runtime and bot will answer on the basis of pdfs uploaded. Used streamlit as frontend."
              tools='Python, streamlit, langchain, FAISS, Gemini'
              ghLink="https://github.com/Rehman-Akram/chat-with-multiple-pdfs"
              demoLink="http://54.254.151.238:8501"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is only frontend project created on react, showcasing my portfolio"
              tools='Javascript, React, bootstrap'
              ghLink="https://github.com/Rehman-Akram/portfolio"
              demoLink="https://d263l9642rjt91.cloudfront.net"
            />
          </Col>
           */}
        </Row>
      </Container>
      
    </Container>
  );
}

export default Projects;
