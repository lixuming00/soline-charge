import React, { Component } from 'react';
import { CommonHeadComp, CommonTitleComp } from "../../src/components/common-comp";
import { RentListComp } from "../../src/components/rent-comp";

class RentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentStatus: 'on'
    }
  }
  render() {
    return (
      <div className={`rent-list-wrapper`}>
        <CommonTitleComp />
        <CommonHeadComp title={`租赁记录`} />

        <div className={`rent-list-title`}>
        	<span>我的订单</span>
        </div>

        <div className="rent-list-content">
          <RentListComp />
        </div>
        
      </div>
    )
  }
}

export default RentList;