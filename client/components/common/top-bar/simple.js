import React from 'react';
import { } from 'reactstrap';
import styles from './Topbar.module.scss';
import { Twitter, Facebook, Linkedin, Instagram, Phone } from 'react-feather';

const Simple = ({ phone = "+51 000 000 000" }) => {
  return (
    <div className={`${styles.topBar} d-none d-md-block`}>
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-8">
                  <div className={styles.topBarLeft}>
                      <div className={styles.text}>
                          <Phone size={15} stroke='#ffff'/>
                          <h2 className='ml-1'>{phone}</h2>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className={styles.topBarRight}>
                      <div className={styles.social}>
                          <a href=""><Twitter size={15} fill='#ffff'/></a>
                          <a href=""><Facebook size={15} fill='#ffff'/></a>
                          <a href=""><Linkedin size={15} fill='#ffff'/></a>
                          <a href=""><Instagram size={15}/></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Simple;