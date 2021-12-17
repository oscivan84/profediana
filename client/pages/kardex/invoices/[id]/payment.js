import React from "react";
import { authorize } from "../../../../helpers/authServerSideProps";
import { LayoutCuba } from "../../../../components/common/layout";
import Breadcrumb from "../../../../components/common/layout/breadcrumb";
import { connect } from "react-redux";
import Payments from "../../../../components/kardex/payments";
import InvoiceRequest from '../../../../request/kardex/invoiceRequest';

const PaymentPage = ({ currentInvoice }) => {

  if (!currentInvoice) return null;

  return (
    <LayoutCuba>  
      <Breadcrumb parent="Kardex" title="Método de Pago" />
      <Payments invoice={currentInvoice}/>
    </LayoutCuba>
  )
}

export const getServerSideProps = authorize("Payment", async (ctx) => {

  const { id } = ctx.query;
  const invoiceRequest = new InvoiceRequest();
  const currentInvoice = await invoiceRequest.show(id)
  .then(res => res.data)
  .catch(() => undefined)
  // result
  return { currentInvoice };
});

export default connect(state => state)(PaymentPage);

