import React, { Component } from 'react';

class RefundApplyCashComp extends Component {
  render() {
    return (
      <div className={`refund-apply-comp-content`}>
        <div className="refund-apply-comp-common">
          可退押金：
          <span>20</span>
          元
        </div>
        <div className="refund-apply-comp-common">
          退还押金：
          <span>10</span>
          元
        </div>
      </div>
    );
  }
}

export default RefundApplyCashComp;