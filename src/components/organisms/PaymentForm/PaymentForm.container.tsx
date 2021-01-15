import React, { useEffect, useState } from 'react';
import PaymentFormView from './PaymentForm.view';

const PaymentFormContainer = () => {
  const onPaymentForm = () => {};
  return <PaymentFormView onPropPaymentForm={onPaymentForm} />;
};

export default PaymentFormContainer;
