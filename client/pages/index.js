import React from 'react';
import { guest } from '../helpers/authServerSideProps'
import { connect } from 'react-redux'
import Home from '../components/home';
import { LayoutHero } from '../components/common/layout';

const IndexPage = () => (
  <LayoutHero>
    <Home/>
  </LayoutHero>
)

export const getServerSideProps = guest('SofSol')

export default connect(state => state)(IndexPage);