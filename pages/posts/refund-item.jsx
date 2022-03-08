import React, {Component} from 'react';
import { CommonTitleComp,CommonHeadComp, CommonBtnComp } from '../../src/components/common-comp/';
import { RefundBalance } from '../../src/components/refund-comp/';
import axios from 'axios';



class RefundApply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'cash',
      data: {}
    }
  };

  recieveData = (value,url) => {
    axios.get(url).then((res) => {
      const result = res.data.data;
      this.setState({
        current: value,
        data: result
      })
    })
  };

  handleCurrentChange = (value,url) => {
    if(value === 'cash') {
      this.recieveData(value,url)
    }else if(value === 'balance') {
      this.recieveData(value,url)
    }
  };

  componentDidMount() {
    axios.get('/api/refund-cash.json').then((res) => {
      const result = res.data.data;
      this.setState({
        data: result
      })
    })
  }

  render() {
    return (
      <div className={`refund-apply-wrapper`}>
        <CommonTitleComp />
        <CommonHeadComp title={`退款申请`} />

        <div className={`refund-apply-content`}>
          <div className={`refund-tab`}>
            <span
              className={this.state.current === 'cash' ? 'active' : ''}
              onClick={e => this.handleCurrentChange('cash','/api/refund-cash.json')}
            >
              退押金记录
            </span>
            <span
              className={this.state.current === 'balance' ? 'active' : ''}
              onClick={e => {this.handleCurrentChange('balance','/api/refund-balance.json')}}
            >
              退余额记录
            </span>
          </div>

          <RefundBalance data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default RefundApply;