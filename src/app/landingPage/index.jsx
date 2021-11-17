import React from 'react'
import Header from "./Header";
import SectionMain from './SectionMain';
import SectionCharacteristic from './SectionCharacteristic';
import SectionInfo from './SectionInfo';
import SectionPrices from './SectionPrices';
import Footer from './Footer'

function LandingPage (){
    return(
        <React.Fragment>
         <Header/> 
         <SectionMain/>
         <SectionCharacteristic/>
         <SectionInfo/>
         <SectionPrices/>
         <Footer/>
         </React.Fragment>

    )
}

export default LandingPage