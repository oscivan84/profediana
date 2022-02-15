import React from 'react';
import { BannerHero } from '../common/banner';
import { ServiceHero } from '../common/service';
import { AboutHero } from '../common/about';
import { PricingHero } from '../common/pricing';
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';


const Home = () => {

  const { mode } = useSelector(state => state.screen);

  // const mediaQueryDesktop = {
  //   maxWidth: "75%",
  //   overflowX: "hidden"
  // }

  // const mediaQueryMobile = {
  //   padding: "0px"
  // }

  return (
    <Container fluid>
      <Row>
      <BannerHero/>
      <ServiceHero/>
      <AboutHero/>
      <PricingHero/>
      </Row>
      {/* // style={mode == "xs" ? mediaQueryMobile : mediaQueryDesktop */}
    </Container>
  ) 
}

export default Home;