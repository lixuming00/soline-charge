import React, {Component} from 'react';
import {CommonBtnComp, CommonHeadComp, CommonTitleComp} from "../../src/components/common-comp";

class RentList extends Component {
  render() {
    return (
      <div>
        <CommonTitleComp />
        <CommonHeadComp title={`租赁记录`} />
      </div>
    );
  }
}

export default RentList;