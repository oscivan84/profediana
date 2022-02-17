import React from "react";
import styles from "./Service.module.scss";
import { Clock, Monitor, Hexagon } from "react-feather";
import { Col } from "react-bootstrap";
import { Container, Row } from "reactstrap";

const data = [
  {
    title: "Decoración y técnicas de esculpido",
    description: "Aprende a esculpir uñas en acrílico y todo sobre manicura.",
    icon: <Clock size={35} className="text-white" />,
  },
  {
    title: "Uñas esculturales",
    description: "Aprende sobre uñas esculturales y acabado stiletto.",
    icon: <Monitor size={35} className="text-white" />,
  },
  {
    title: "Semipermanente",
    description: "Esmaltado en gel semipermanente, esculpido de uñas.",
    icon: <Hexagon size={35} className="text-white" />,
  },
];

const ServiceHero = () => {
  return (
    <>
      <div className={styles.service} id="heroService">
        <Container>
          <div
            className={`${styles.serviceHeader} text-center wow zoomIn`}
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "zoomIn",
            }}
          >
            <h2 className={styles.title}>Características</h2>
          </div>
          <Row>
            {data.map((d, index) => (
              <Col
                md={6}
                lg={4}
                key={`list-item-service-${index}`}
                className="wow fadeInUp"
                style={{
                  visibility: "visible",
                  animationDelay: "0s",
                  animationName: "fadeInUp",
                }}
              >
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>
                    <i>{d.icon}</i>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className={styles.serviceGradiant}></div>
    </>
  );
};

export default ServiceHero;
