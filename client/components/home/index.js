import React from 'react';
import { BannerHero } from '../common/banner';
import { ServiceHero } from '../common/service';
import { AboutHero } from '../common/about';
import { PricingHero } from '../common/pricing';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';


const Home = () => {

  const { mode } = useSelector(state => state.screen);

  const mediaQueryDesktop = {
    maxWidth: "75%",
    overflowX: "hidden"
  }

  const mediaQueryMobile = {
    padding: "0px"
  }

  return (
    <Container className='container-hidden container-viewport'
      style={mode == "xs" ? mediaQueryMobile : mediaQueryDesktop}
    >
    
      <BannerHero/>
      <ServiceHero/>
      <AboutHero/>
      <PricingHero/>
    </Container>
  ) 
}

export default Home;