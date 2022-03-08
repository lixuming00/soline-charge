import React, {Component} from 'react';
import { CommonHeadComp, CommonTitleComp } from "../../src/components/common-comp";

class RentList extends Component {
  render() {
    return (
      <div className={`rent-list-wrapper`}>
        <CommonTitleComp />
        <CommonHeadComp title={`租赁记录`} />

        <div className={`rent-list-title`}>
        	<span>我的订单</span>
        </div>
        
      </div>
    )
  }
}

export default RentList;