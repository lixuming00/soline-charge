import React, {Component} from 'react';
import { CommonTitleComp,CommonHeadComp, CommonBtnComp } from '../../src/components/common-comp/';

class RefundApply extends Component {

  render() {
    return (
      <div className={`refund-apply-wrapper`}>
        <CommonTitleComp />
        <CommonHeadComp title={`退款申请`} />

        <div className={`refund-apply-content`}>
          RefundApply
        </div>

        <CommonBtnComp btnTitle={`退还`} />
      </div>
    );
  }
}

export default RefundApply;