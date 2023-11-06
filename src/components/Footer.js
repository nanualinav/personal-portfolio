import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <section className="footer">
      <Container className="mt-2 pt-4 pb-2">
        <Row>
          <Col>
            <p>© 2023 Built and designed by Alina Nanu</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
