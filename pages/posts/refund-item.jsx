import React, {Component} from 'react';
import { CommonTitleComp,CommonHeadComp, CommonBtnComp } from '../../src/components/common-comp/';

class RefundItem extends Component {
  render() {
    return (
      <div>
        <CommonTitleComp />
        <CommonHeadComp title={`退款记录`} />
      </div>
    );
  }
}

export default RefundItem;