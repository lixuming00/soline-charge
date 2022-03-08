import React, { Component } from 'react';
import { CommonTitleComp,CommonHeadComp, CommonBtnComp } from '../../src/components/common-comp/';
import { RefundApplyCashComp, RefundApplyBalanceComp } from '../../src/components/refund-comp/';

class RefundApply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'cash',
      data: []
    }
  };

  handleCurrentChange = (value) => {
    this.setState({
      current: value
    })
  };

  render() {
    return (
      <div className={`refund-apply-wrapper`}>
        <CommonTitleComp />
        <CommonHeadComp title={`退款申请`} />

        <div className={`refund-apply-content refund-bgc`}>
          <div className={`refund-tab`}>
            <span
              className={this.state.current === 'cash' ? 'active' : ''}
              onClick={() => this.handleCurrentChange('cash')}
            >
              退押金
            </span>
            <span
              className={this.state.current === 'balance' ? 'active' : ''}
              onClick={() => this.handleCurrentChange('balance')}
            >
              退余额
            </span>
          </div>

          <div className="refund-apply-comp-content-wrapper">
            {
              this.state.current === 'cash'
                ?
                <RefundApplyCashComp />
                :
                <RefundApplyBalanceComp />
            }
          </div>
        </div>

        <CommonBtnComp btnTitle={`退还`} />
      </div>
    );
  }
}

export default RefundApply;