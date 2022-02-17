import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import { Col } from 'react-bootstrap';
import { Container, Row } from 'reactstrap';

const data = [
  {
    title: "Uñas shellac",
    image: require('../../../assets/images/about/about-1.png'),
    description: `
      Este tipo de técnica es ideal para aquellas personas con uñas medio largas o largas. 
      Son una mezcla entre esmalte y gel. En este caso, la manicura no queda tan gruesa pero 
      la resistencia es mayor y el resultado parece más natural.
    `
  },
  {
    title: "Metodología de estudio",
    image: require('../../../assets/images/about/about-2.png'),
    description: `
      Trabajamos con una metodología de estudio totalmente flexible que 
      permite compaginar el aprendizaje con la vida laboral y personal.
    `
  },
  {
    title: "Acreditaciones y certificaciones",
    image: require('../../../assets/images/about/about-3.png'),
    description: `
      Nuestros alumnos buscan formación académica de calidad y acreditada. 
      Por ello, colaboramos con algunas instituciones y organizaciones que 
      avalan y certifican la calidad de los contenidos de nuestros cursos online y a distancia.
    `
  },
]

const AboutReact = () => {

  const isOver = (num) => {
    return num % 2 == 0;
  }

  return (
    <>
      <div className={`${styles.about} wow fadeInUp`}
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}>
          <Container fluid>
        {data.map((d, index) =>
          
            <Row key={`list-item-about-${index}`} className="my-5">
              {isOver(index + 1)
                ? <Col md={6} xs={12}>
                  <div className={`img-fluid ${styles.imgService}`}>
                  <Image src={d.image || null} alt="Image" layout="responsive" className="img-fluid"/>
                  </div>
                </Col>
                : null
              }
              <Col md={6} lg={5} className="mx-auto my-5">
                <div className={`${styles.sectionHeader} text-left`}>
                  <h2 className={styles.title}>{d.title}</h2>
                </div>
                <div className={styles.aboutText}>
                  <p>
                    {d.description}
                  </p>
                  <a className={`text-center ${styles.btn}`} href="">Ver más</a>
                </div>
              </Col>
              {!isOver(index + 1)
                ? <Col md={6} lg={5}>
                  <div className={`img-fluid ${styles.imgService}`}>
                  <Image src={d.image || null} alt="Image" layout="responsive" className="img-fluid"/>
                  </div> 
                </Col>
                : null
              }
            </Row>
        )}
        </Container>
      </div>
      <div className={styles.aboutGradiant}></div>
    </>
  )
}

export default AboutReact;