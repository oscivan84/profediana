import React from 'react';
import { authorize } from '../../../helpers/authServerSideProps';
import { LayoutCuba } from '../../../components/common/layout';
import Breadcrumb from '../../../components/common/layout/breadcrumb';
import { connect } from 'react-redux';
import { CreateProduct } from '../../../components/kardex/products/createProduct';

const PageInvoices = () => {

  return (
    <LayoutCuba>  
      <Breadcrumb parent="Kardex" title="Productos" />
      <CreateProduct/>
    </LayoutCuba>
  )
};

export const getServerSideProps = authorize("Products");

export default connect(state => state)(PageInvoices);