import React, {Component} from 'react';
import { CommonTitleComp,CommonHeadComp, CommonBtnComp } from '../../src/components/common-comp/';
import {
  Form,
  Input,
  Radio,
  Selector,
  Space
} from 'antd-mobile';

class ChargeBalance extends Component {
  render() {
    return (
      <div className={`charge-balance-wrapper`}>
        <CommonTitleComp />
        <CommonHeadComp title={'余额充值'} />

        <main className="charge-balance-content">
          <Selector
            className={`chose`}
            options={[
               { label: '1元', value: 1 }
              ,{ label: '5元', value: 5 }
              ,{ label: '10元', value: 10 }
              ,{ label: '20元', value: 20 }
              ,{ label: '30元', value: 30 }
              ,{ label: '50元', value: 50 }
            ]}
            columns={3}
            multiple={ false }
            defaultValue={[1]}
          />

          <Form
            mode={`card`}
            layout={`horizontal`}
          >
            <Form.Item
              name='name'
              label='￥'
              rules={[{ message: '金额不能为空' }]}
            >
              <Input placeholder='请输入充值金额' />
            </Form.Item>
          </Form>

          <div className={`agree-font`}>
            <div className={`agreement-title`}>充值金额可随时提现</div>
            <div className={`agreement-content`}>
              <Radio>
                已阅读并同意
                <a href="">《使用条款》</a>
                和
                <a href="">《充值协议》</a>
              </Radio>
            </div>
          </div>
        </main>

        <CommonBtnComp btnTitle={'立即充值'} />
      </div>
    );
  }
}

export default ChargeBalance;