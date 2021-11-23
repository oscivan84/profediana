import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';
import { Container } from 'reactstrap'
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
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className={`${styles.heroText}`}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className={styles.heroBtn}>
                                <Link href="/register">
                                    <a className={styles.btn}>Regístrate Ahora</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className={styles.heroImage}>
                            <Image src={require('../../../assets/images/portada.png')} alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={`${styles.heroContentArrow} animate__animated animate__shakeY animate__slow animate__infinite`}>
                <a href='#heroService' className={styles.heroIconArrow}>
                    <ArrowDown decelerate={true}/>
                </a>
            </div>
        </div>
    </>
  )
}

export default BannerHero;