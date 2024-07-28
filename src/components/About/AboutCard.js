import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {PROFILE} from './../../constants/profileConstants';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{PROFILE.name} </span>
            from <span className="purple"> Mianwali, Pakistan. &nbsp;</span>
            Working in software development field since <i><b className="purple">2022</b></i>.
            <br />
            I am currently employed as a software engineer at Focusteck. 
            <br />
            I have completed Bachelor (BS) in Computer Sciences from Namal Institute (Affiliated with UET Lahore) 
            Mianwali.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Table Tennis
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Learning New Techs
            </li>
          </ul>

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
