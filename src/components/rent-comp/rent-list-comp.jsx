import React, { Component } from 'react';

class RentListComp extends Component {
  render() {
    return (
      <div className={`rent-list-item`}>

        <div className="common rent-list-item-title">
          <div>
            <img src="/statics/complete.png" alt=""/>
            <span>进行中</span>
          </div>
          <div>预计费用：<span>0.00</span>元</div>
        </div>

        <div className="common rent-list-item-number">
          <div><span>订单号</span></div>
          <div><span>11222111222</span></div>
        </div>

        <div className="common rent-list-item-place">
          <div><span>租借地点</span></div>
          <div><span>北京市顺义区</span></div>
        </div>

        <div className="common rent-list-item-start-time">
          <div><span>租借时间</span></div>
          <div><span>2022-03-09 12：10</span></div>
        </div>

        <div className="common rent-list-item-total-time">
          <div>
            <img src="/statics/timeicon.png" alt=""/>
            <span>2小时30分钟</span>
          </div>
        </div>

      </div>
    )
  }
}

export default RentListComp;