import React from "react";
import { authorize } from "../../../../helpers/authServerSideProps";
import { LayoutCuba } from "../../../../components/common/layout";
import Breadcrumb from "../../../../components/common/layout/breadcrumb";
import { connect } from "react-redux";
import Payments from "../../../../components/kardex/payments";
import { useRouter } from "next/router";

const PaymentPage = () => {

  const router = useRouter();

  return (
    <LayoutCuba>  
      <Breadcrumb parent="Kardex" title="Método de Pago" />
      <Payments id={router.query.id}/>
    </LayoutCuba>
  )
}

export const getServerSideProps = authorize("Payment");

export default connect(state => state)(PaymentPage);

