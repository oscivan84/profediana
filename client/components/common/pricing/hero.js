import React from 'react';
import { Col } from 'react-bootstrap';
import { Container, Row } from 'reactstrap';
import styles from './Pricing.module.scss'

const data = [
  {
      title: "Diplomado Manicura",
      duration: "5 meses",
      price: "290.000",
      currency: "$",
      typeTime: "mes",
      list: [
        "Diploma",
      ],
  },
  {
    title: "Decoracion y dibujo",
    duration: "10 meses",
    price: "2450000",
    currency: "$",
    typeTime: "mes",
    active: true,
    list: [
      "Diploma",
      "Certificado",
    ],
  },
  {
    title: "Decorado full técnicas",
    duration: "15 meses",
    price: "200000",
    currency: "$",
    typeTime: "mes",
    list: [
      "Diploma",
      "Certificado",
      "Polo Profesora Diana"
    ],
  }
]

const PricingHero = () => {

  return (
    <div className={styles.price}>
      <Container className={` ${styles.container}`}>
          <div className={`${styles.header} text-center wow zoomIn`} 
            style={{ 
              visibility: "visible", 
              animationDelay: "0.1s", 
              animationName: "zoomIn"
            }}
          >
            <h2 className={styles.title}>Planes de Precios</h2>
          </div>
          <Row className="justify-content-center">
              {data.map((d, index) => 
                <Col md={4} key={`item-pricing-${index}`}
                  className=" wow fadeInUp" 
                  style={{ 
                    visibility: "visible",
                    animationDelay: "0s", 
                    animationName: "fadeInUp"
                  }}
                >
                    <div className={`${styles.priceItem} ${d.active ? styles.featuredItem : null}`}>
                        <div className={styles.priceHeader}>
                            {!d.active ? null :
                              <div className={styles.priceStatus}>
                                  <span>Popular</span>
                              </div>
                            }
                            <div className={styles.priceTitle}>
                              <h2 className='mt-2'>{d.title}</h2>
                            </div>
                            <div className={styles.pricePrices}>
                                <h2><small>{d.currency}</small>{d.price}<span>/ {d.typeTime}</span></h2>
                            </div>
                        </div>
                        <div className={styles.priceBody}>
                            <div className={styles.priceDescription}>
                                <ul>
                                    {d.list?.map((li, indexL) => 
                                      <li key={`list-item-prising-${indexL}`}>
                                        {li}
                                      </li>  
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.priceFooter}>
                            <div className={styles.priceAction}>
                                <a className={styles.btn} href="#">Comenzar</a>
                            </div>
                        </div>
                    </div>
                </Col>
              )}
          </Row>
      </Container>
  </div>
  )
}

export default PricingHero;