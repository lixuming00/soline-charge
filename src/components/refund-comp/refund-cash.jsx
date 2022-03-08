import React, {Component} from 'react';

class RefundCash extends Component {
  render() {
    return (
      <div className={`refund-comp-content`}>
        <div className="refund-item">
          <div className={`refund-item-status`}>
            <span>退押金</span>
            <span>已完成</span>
          </div>

          <div>
            <span>icon1</span>
            <span>2022-02-01 10:15</span>
          </div>

          <div>
            <span>icon2</span>
            <span>99</span>
          </div>

        </div>
      </div>
    );
  }
}

export default RefundCash;