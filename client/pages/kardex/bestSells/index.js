import React from 'react';
import { authorize } from '../../../helpers/authServerSideProps';
import { LayoutCuba } from '../../../components/common/layout';
import Invoices from '../../../components/kardex/invoices';
import Breadcrumb from '../../../components/common/layout/breadcrumb';
import { connect } from 'react-redux';

const BestSells = () => {

  return (
    <LayoutCuba>  
      <Breadcrumb parent="Kardex" title="Mejores ventas" />
      <Invoices/>
    </LayoutCuba>
  )
};

export const getServerSideProps = authorize("Invoices");

export default connect(state => state)(BestSells);