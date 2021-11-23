import React from 'react';
import styles from './Service.module.scss'
import { Clock, Monitor, Hexagon } from 'react-feather'

const data = [
  { 
    title: "Decoración y técnicas de esculpido",
    description: "Aprende a esculpir uñas en acrílico y todo sobre manicura.",
    icon: <Clock size={35} className='text-white'/>
  },
  { 
    title: "Uñas esculturales",
    description: "Aprende sobre uñas esculturales y acabado stiletto.",
    icon: <Monitor size={35} className='text-white'/>
  },
  { 
    title: "Semipermanente",
    description: "Esmaltado en gel semipermanente, esculpido de uñas.",
    icon: <Hexagon size={35} className='text-white'/>
  }
];

const ServiceHero = () => {

  return (
    <>
      <div className={styles.service} id="heroService">
        <div className="container">
            <div className={`${styles.serviceHeader} text-center wow zoomIn`} 
              data-wow-delay="0.1s" 
              style={{ 
                visibility: "visible", 
                animationDelay: "0.1s", 
                animationName: "zoomIn"
              }}
            >
              <h2 className={styles.title}>Características</h2>
            </div>
            <div className="row">
              {data.map((d, index) => 
                <div key={`list-item-service-${index}`}
                  className="col-lg-4 col-md-6 wow fadeInUp" 
                  style={{ 
                    visibility: "visible", 
                    animationDelay: "0s", 
                    animationName: "fadeInUp"
                  }}
                >
                  <div className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>
                      <i>
                        {d.icon}
                      </i>
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.description}</p>
                  </div>
                </div>
              )}
            </div>
        </div>
      </div>
      <div className={styles.serviceGradiant}></div>
    </>
  )
}

export default ServiceHero;