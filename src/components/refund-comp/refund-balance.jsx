import React, {Component} from 'react';

class RefundBalance extends Component {
  render() {
    const { data : _data = [] } = this.props;

    return (
      <div className={`refund-item-comp-wrapper`}>
      {
        _data && Array.isArray(_data) && _data.map((item, i) => (
          <div className="refund-item-comp" key={i}>

            <div className={`refund-item-title`}>
              <span>{item.title}</span>
              <span>{item.status}</span>
            </div>

            <div className={`refund-item-common`}>
              <img src="/statics/timeIcon1.png" alt=""/>
              <span>{item.time}</span>
            </div>

            <div className={`refund-item-common`}>
              <img src="/statics/amountIcon.png" alt=""/>
              <span>{item.amount}</span>
            </div>
          </div>
        ))
      }
      </div>
    )
  }
}

export default RefundBalance;