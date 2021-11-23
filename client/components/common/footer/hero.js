import React from 'react';
import styles from './Footer.module.scss';
import { Twitter, Facebook, Youtube, Instagram, Linkedin } from 'react-feather'

const FooterHero = () => {
  return (
    <div className={`${styles.footer} wow fadeIn`} 
      dataWowDelay="0.3s" 
      style={{ 
        visibility: "visible", 
        animationDelay: "0.3s", 
        animationName: "fadeIn"
      }}>
      <div className={`container-fluid ${styles.containerFluid}`}>
        <div className="container">
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
        </div>
        <div className={`container ${styles.copyright}`}>
          <div className="row justify-content-cetner">
            <div className="col-md-6 text-center pb-4">
              <p>© <a href="#">ProfesoraDiana</a>, Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-center pb-4">
              <p>Diseñado por <a href="#">SolSof</a></p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default FooterHero;