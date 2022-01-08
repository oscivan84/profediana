import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';
import { Container, Row, Col } from 'reactstrap'
import { ArrowDown } from 'react-feather'
import Link from 'next/link';

const BannerHero = ({ 
  title = "Diplomado en Manicure", 
  description = "Aprende las técnicas de belleza para uñas y gana dinero haciéndolo" 
}) => {

  return (
    <>
        <div className={styles.hero}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className={`${styles.heroText}`}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className={styles.heroBtn}>
                                <Link href="/register">
                                    <a className={styles.btn}>Regístrate Ahora</a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                        <div className={styles.heroImage}>
                            <Image src={require('../../../assets/images/portada.png')} alt="Hero Image"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.heroContentArrow} animate__animated animate__shakeY animate__slow animate__infinite`}>
                <a href='#heroService' className={styles.heroIconArrow}>
                    <ArrowDown decelerate={true}/>
                </a>
            </div>
            <div className={styles.heroGradiant}></div>
        </div>
    </>
  )
}

export default BannerHero;