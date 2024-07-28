import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.JPEG"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import {PROFILE} from '../../constants/profileConstants';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Dedicated and skilled 
            <i> 
                <b className="purple"> software engineer &nbsp; 
                </b>
            </i>
             with a specialization in JavaScript development. With 
             <i> 
                <b className="purple"> 2 years experience  &nbsp; 
                </b>
            </i>
             of building dynamic and responsive web applications, I have expertise in designing and implementing the front end of web and mobile applications using React.js, React Native, HTML, CSS, JavaScript, and TypeScript.
             I have a solid understanding of the technologies and tools used in the 
             <i> 
                <b className="purple"> MERN stack  &nbsp; 
                </b>
            </i> (MongoDB, Express.js, React.js, and Node.js) and React Native. Experienced in working with small teams across multiple projects. Moreover, I am passionate about staying up-to-date with the latest 
            <i> 
                <b className="purple"> web development  &nbsp; 
                </b>
            </i>
            trends and technologies.
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="purple">websites </b> and
                also interested in crafting{" "}
                <b className="purple">
                  mobile apps.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid round-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={PROFILE.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href={PROFILE.linkedInLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
