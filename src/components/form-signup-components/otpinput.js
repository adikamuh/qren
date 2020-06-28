import React, { Component } from "react";
import OtpInput from "react-otp-input";


class OTPInput extends Component {
  render() {
    return (
      <div>
        <OtpInput
          onChange={otp => console.log(otp)}
          numInputs={6}
          inputStyle={{
            width: '40px',
            height: '40px',
            border: 'none',
            outline: 'none'
          }}
          separator={<span>-</span>}
        />
      </div>
    );
  }
}

export default OTPInput
