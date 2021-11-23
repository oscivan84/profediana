import React from 'react';
import { BannerHero } from '../common/banner';
import { ServiceHero } from '../common/service';
import { AboutHero } from '../common/about';
import { PricingHero } from '../common/pricing';


const Home = () => {

  return (
    <>
      <BannerHero/>
      <ServiceHero/>
      <AboutHero/>
      <PricingHero/>
    </>
  ) 
}

export default Home;