import React, {Component} from 'react';
import { CommonHeadComp, CommonBtnComp } from '/src/components/common-comp';

class ChargeBalance extends Component {
  render() {
    return (
      <div>
        <CommonHeadComp title={'余额充值'} />

        <div className="content">
          content
        </div>

        <CommonBtnComp btnTitle={'立即充值'} />
      </div>
    );
  }
}

export default ChargeBalance;