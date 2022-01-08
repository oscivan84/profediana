import React from 'react';
import styles from './Footer.module.scss';
import { Twitter, Facebook, Youtube, Instagram, Linkedin } from 'react-feather'
import { Col } from 'react-bootstrap';
import { Container, Row } from 'reactstrap';

const FooterHero = () => {
  return (
    <div className={`${styles.footer} wow fadeIn`} 
      style={{ 
        visibility: "visible", 
        animationDelay: "0.3s", 
        animationName: "fadeIn"
      }}>
      <div className={`container-fluid ${styles.containerFluid}`}>
        <Container>
          <div className={styles.footerInfo}>
            <a href="index.html" className={styles.footerLogo}>P<span>rofe</span>Diana</a>
            <h3>Calle 23 # 56-56 Barrio</h3>
            <div className={styles.footerMenu}>
              <p>+51 000 000 000</p>
              <p>info@profediana.com</p>
            </div>
            <div className={styles.footerSocial}>
              <a href="#" className='text-white mr-2'><Twitter size={20}/></a>
              <a href="#" className='text-white mr-2'><Facebook size={20}/></a>
              <a href="#" className='text-white mr-2'><Youtube size={20}/></a>
              <a href="#" className='text-white mr-2'><Instagram size={20}/></a>
              <a href="#" className='text-white mr-2'><Linkedin size={20}/></a>
            </div>
          </div>
        </Container>
        <Container className={`${styles.copyright}`}>
          <Row className="justify-content-cetner">
            <Col md={6} className="text-center pb-4">
              <p>© <a href="#">ProfesoraDiana</a>, Todos los derechos reservados.</p>
            </Col>
            <Col md={6} className="text-center pb-4">
              <p>Diseñado por <a href="#">SolSof</a></p>
            </Col>
          </Row>
        </Container>
      </div>
  </div>
  )
}

export default FooterHero;