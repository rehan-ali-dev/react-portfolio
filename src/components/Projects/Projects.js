import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import fypArchitecture from "../../Assets/Projects/fyp_architecture.png";
import mernLearning from './../../Assets/Projects/mern_learning.png';
import footBallMe from './../../Assets/Projects/PlayFootballHeaderV2.png';
import aifaApp from './../../Assets/Projects/AifaHeader.png';
import orixaApp from './../../Assets/Projects/ParkDNA.png';
import herzmannPortal from './../../Assets/Projects/HerzmannPortal.png';
import devPool from './../../Assets/Projects/TheDevPoolHeader.png';
import brilliantMove from './../../Assets/Projects/FixAfibConnect.png';
import portfolio from "../../Assets/Projects/portfolio.png";
import mmpStats from './../../Assets/Projects/MMPSites.png';
import direcme from './../../Assets/Projects/Direceme.png';
import fyp from './../../Assets/Projects/FYP.png';
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
              title="Playfootball ME"
              description="Worked as Full Stack Developer + Team Lead - Playfootball app is dedicated for football players enthusiasts who would like to play games without the hassle of arranging them. Users can check the matches agenda, select their preferred game and just PLAY!. App will take care of all logistics, from finding enough team players to play the game to arranging the teams with a referee."
              tools='React Native, Strapi (Headless CMS) , Postgresql, Firebase,  Javascript'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={orixaApp}
              isBlog={false}
              title="ParkDNA Portal"
                description="Worked as frontend developer -  A user-friendly portal built in React that helps parking enforcement officers manage their tasks efficiently in the field. From issuing instant violation tickets to tracking vehicles on a live map, our frontend team focused on delivering a smooth, intuitive experience that supports officers in high-pressure, real-world environments"
              tools='React, React Query, MapboxGL, MUI'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brilliantMove}
              isBlog={false}
              title="Fixafib Connect"
              description="Worked as full stack developer - Fixafib Connect is a healthcare application designed to help hospital staff manage Afib patients more efficiently by automating tasks that were previously done manually. Here patient details are centrally maintained, and the complete patient lifecycle—including updates, case management, and discharge processes—is streamlined and managed in one platform. "
              tools='React, Node, Express, Postgresql'
              isAchievement="Focusteck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={aifaApp}
              isBlog={false}
              title="Project - Aifa App"
              description="Worked as full stack developer (MERN) - A web app designed to
              help SMEs to keep record of their expenses and all kinds of transactions. Its managing company's financial reports, income statement generation and audit related things. Implemented 2FA, OCR and data extraction from pdf like features"
              tools='MongoDB, Express, React, Node.JS, Typescript'
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
              imgPath={mmpStats}
              isBlog={false}
              title="MMP Sites"
              description="I developed its web app from scratch - MMP Sites is a comprehensive web and mobile platform designed for listing and discovering construction-related services. Contractors can showcase their offerings—ranging from construction to interior design—while buyers can easily browse, filter, and connect with service providers that match their needs."
              tools='React, Firebase, Google Maps'
              // ghLink="https://github.com/Rehman-Akram/boiler-plate-express"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={direcme}
              isBlog={false}
              title="Direcme"
              description="I delivered end-to-end solutions for Direcme, transforming Figma designs into a pixel-perfect, interactive, and scalable ecosystem. Direcme is a comprehensive platform where businesses can list their services, and consumers can easily browse, filter, and book what they need—whether it’s hotel reservations, spa appointments, or car rentals. It also includes an admin panel for managing listings and bookings."
              // The system brings all services together in one place and includes a powerful admin panel for managing businesses, monitoring bookings, and ensuring smooth platform operations."
              tools='React, React Native, Firebase'
              // ghLink="https://github.com/Rehman-Akram/boiler-plate-express"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fyp}
              isBlog={false}
              title="Online Homemade Food Ordering System"
              description="I have developed an online homemade food ordering system as my Final Year Project. Its main aim was to simplify and improve the efficiency of the online food ordering process. I have developed three different apps for different kinds of users including customers, chefs, and admin."
              tools='React Native, Node.js, Express, MySQL'
              // ghLink="https://github.com/mrehanali127/customer-module-V1"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernLearning}
              isBlog={false}
              title="Room Reservation Web App"
              description="I developed a full-stack room reservation app during ny learning. I have designed a User interface for booking and implemented an admin dashboard for room management. I developed the REST API in Express and Node with a role-based strategy in mind."
              tools='MongoDB, Express, React, Node.js'
              // ghLink="https://github.com/Rehman-Akram/boiler-plate-express"
            />
          </Col> */}

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
