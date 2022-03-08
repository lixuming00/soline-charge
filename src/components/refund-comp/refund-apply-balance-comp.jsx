import React, {Component} from 'react';

class RefundApplyBalanceComp extends Component {
  render() {
    return (
      <div className={`refund-apply-comp-content`}>
        <div className="refund-apply-comp-common">
          可退余额：
          <span>20</span>
          元
        </div>
        <div className="refund-apply-comp-common">
          申请退还：
          <span>10</span>
          元
        </div>
      </div>
    );
  }
}

export default RefundApplyBalanceComp;