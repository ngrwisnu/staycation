import { BookingResume, InputFile, InputText } from "elements/Form";
import React from "react";
import "./_payment.scss";

import LogoAcb from "assets/images/bank-1.png";
import LogoScb from "assets/images/bank-2.png";

const Payment = (props) => {
  const { data, itemDetails, checkout } = props;

  return (
    <div className="container mt-4">
      <div className="row payment-details justify-content-center">
        <div className="col-5 payment-resume">
          <p>Payment transfer:</p>
          <BookingResume
            price={itemDetails.price}
            duration={checkout.duration}
            endDate={checkout.date.endDate}
            tax={10}
          />
          <p>Bank options:</p>
          <div className="bank">
            <div className="col-3 text-right bank__logo">
              <img src={LogoAcb} alt="Bank ABC" width="56" />
            </div>
            <div className="bank__status">
              <dl>
                <dd>ACB</dd>
                <dd>2022 2202</dd>
                <dd>Velcation Owner</dd>
              </dl>
            </div>
          </div>
          <div className="bank">
            <div className="col-3 text-right bank__logo">
              <img src={LogoScb} alt="Velcation Central Bank" width="56" />
            </div>
            <div className="bank__status">
              <dl>
                <dd>Velcation Central Bank</dd>
                <dd>2220 0022</dd>
                <dd>Velcation Owner</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col-5 payment-form">
          <label htmlFor="proofPayment">Transfer Receipt</label>
          <InputFile
            type="file"
            accept="image/*"
            id="proofPayment"
            name="proofPayment"
            value={data.proofPayment}
            changeHandler={props.changeHandler}
          />
          <label htmlFor="bankName">Customer's Bank</label>
          <InputText
            id="bankName"
            name="bankName"
            type="text"
            value={data.bankName}
            changeHandler={props.changeHandler}
          />
          <label htmlFor="bankHolder">Your name</label>
          <InputText
            id="bankHolder"
            name="bankHolder"
            type="text"
            value={data.bankHolder}
            changeHandler={props.changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
