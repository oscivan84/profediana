import React from 'react';
import { BannerHero } from '../common/banner';
import { ServiceHero } from '../common/service';
import { AboutHero } from '../common/about';
import { PricingHero } from '../common/pricing';
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';


const Home = () => {
  
  return (
    <Container fluid>
      <Row>
      <BannerHero/>
      <ServiceHero/>
      <AboutHero/>
      <PricingHero/>
      </Row>
    </Container>
  ) 
}

export default Home;