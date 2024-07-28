import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandNextjs } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiCss3,
  DiBootstrap
} from "react-icons/di";
import {
  SiRedis,
  SiRedux,
  SiSequelize,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiAngular,
  SiAwslambda,
  SiAmazonaws,
  SiGraphql,
  SiDocker,
  SiOpenai,
  SiOpensearch,
  SiElasticsearch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="hover-text">Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <span className="hover-text"> Typescript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
        <span className="hover-text">HTML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <span className="hover-text">CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <span className="hover-text">Bootstrap</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="hover-text">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <span className="hover-text">  Redux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="hover-text">React Native</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
        <span className="hover-text">NextJs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="hover-text">Node Js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <span className="hover-text">Express</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="hover-text">Mongo Db</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="hover-text">Postgresql</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span className="hover-text">Firebase</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className="hover-text">Python</span>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
      <span className="small-text">TYPEORM</span>
      </Col> */}
    </Row>
  );
}

export default Techstack;
