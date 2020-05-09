import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Footer } from "../../components/Footer";


class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Container fluid>
          <Jumbotron>
            <Row>
              <Col size="sm-12">
                <p className="text-center">Secure reliable communication when you need it. Learn how your organization can imporve on-call workflows with Pagr.</p>
              </Col>
            </Row>
            <Row center>
              <Col size="sm=12">
                <a href="/sign-up" className="btn btn-success">Get Started</a>
              </Col>
            </Row>
          </Jumbotron>
          <Container>
            <Row>
              <Col size="sm-12 md-4">
                <FontAwesomeIcon icon="comment-medical" size="6x" color="Dodgerblue" />
                <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nesciunt reprehenderit. Distinctio culpa sed soluta provident earum. Iste, veritatis.</p>
              </Col>
              <Col size="sm-12 md-4">
                <FontAwesomeIcon icon="laptop-medical" size="6x" color="Dodgerblue" />
                <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nesciunt reprehenderit. Distinctio culpa sed soluta provident earum. Iste, veritatis.</p>
              </Col>
              <Col size="sm-12 md-4">
                <FontAwesomeIcon icon="user-md" size="6x" color="Dodgerblue" />
                <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa nesciunt reprehenderit. Distinctio culpa sed soluta provident earum. Iste, veritatis.</p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}


export default Home;