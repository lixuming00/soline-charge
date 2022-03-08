import React, {Component} from 'react';
import { CommonTitleComp,CommonHeadComp, CommonBtnComp } from '../../src/components/common-comp/';

class RefundApply extends Component {
  render() {
    return (
      <div>
        <CommonTitleComp />
        <CommonHeadComp title={`退款申请`} />
        <CommonBtnComp btnTitle={`退还`} />
      </div>
    );
  }
}

export default RefundApply;