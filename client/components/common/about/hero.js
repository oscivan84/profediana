import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';

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
        dataWowDelay="0.1s" 
        style={{
          visibility: "visible",
          animationDelay: "0.1s", 
          animationName: "fadeInUp"
        }}>
        {data.map((d, index) => 
          <div key={`list-item-about-${index}`}
            className="container mb-5"
          >
            <div className="row align-items-start">
              {isOver(index + 1) 
                ? <div className="col-lg-5 col-md-6">
                    <div className={styles.aboutImg}>
                      <Image src={d.image} alt="Image"/>
                    </div>
                  </div> 
                : null
              }
              <div className="col-lg-7 col-md-6">
                <div className={`${styles.sectionHeader} text-left`}>
                  <h2 className={styles.title}>{d.title}</h2>
                </div>
                <div className={styles.aboutText}>
                  <p>
                    {d.description}
                  </p>
                  <a className={styles.btn} href="">Ver más</a>
                </div>
              </div>
              {!isOver(index + 1) 
                ? <div className="col-lg-5 col-md-6">
                    <div className={styles.aboutImg}>
                      <Image src={d.image} alt="Image"/>
                    </div>
                  </div>
                : null
              }
            </div>
          </div>
        )}
      </div>
      <div className={styles.aboutGradiant}></div>
    </>
  )
}

export default AboutReact;