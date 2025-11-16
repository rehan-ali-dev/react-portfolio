import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {PROFILE} from './../../constants/profileConstants';

// Passionate and highly skilled software engineer with a strong focus on JavaScript development. With over 5 years of experience building dynamic and responsive web applications, I have honed my expertise in both front-end and back-end technologies like React, Vue, Express, and Nest. I pride myself on staying up-to-date with the latest trends and best practices in JavaScript and am always seeking out new challenges.

// Throughout my career, I've had the privilege of working with diverse teams and technologies, solving complex problems and delivering solutions that make a real impact. I'm passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends.

// When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies.

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{PROFILE.name} </span>
            from <span className="purple"> Lahore, Pakistan. &nbsp;</span>
            Working in software development field since <i><b className="purple">2022</b></i>.
            {/* <br />
            I am currently employed as a Senior Software Engineer at Focusteck.  */}
            <br />
            I have completed Bachelor (BS) in Computer Sciences from Namal Institute (Affiliated with UET Lahore) 
            Lahore.
            <br />
            With over 4 years of experience building dynamic and responsive web applications, I have honed my expertise in both front-end and back-end technologies like React, React Native, Node, and Express. I pride myself on staying up-to-date with the latest trends and best practices in JavaScript and am always seeking out new challenges.
            Throughout my career, I've had the privilege of working with diverse teams and technologies, solving complex problems and delivering solutions that make a real impact. I'm passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends.
            <br />
            Apart from coding, I love to explore new technologies and read news articles.
          </p>
          {/* <ul>
          <li className="about-activity">
              <ImPointRight /> Exploring New technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Explore yourself to serve better!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Rehman Akram</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
