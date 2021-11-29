import React from 'react';
import { authorize } from '../../helpers/authServerSideProps';
import { LayoutCuba } from '../../components/common/layout';
import Invoices from '../../components/kardex/invoices';
import Breadcrumb from '../../components/common/layout/breadcrumb';
import { connect } from 'react-redux';

const PageInvoices = () => {

  return (
    <LayoutCuba>  
      <Breadcrumb parent="Kardex" title="Ordenes" />
      <Invoices/>
    </LayoutCuba>
  )
};

export const getServerSideProps = authorize("Invoices");

export default connect(state => state)(PageInvoices);