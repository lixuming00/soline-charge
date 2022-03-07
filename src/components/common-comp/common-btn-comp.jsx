import React, {Component} from 'react';
import { Button } from 'antd-mobile';

class CommonBtnComp extends Component {
  render() {
    const { btnTitle } = this.props;
    return (
      <div className={`common-btn`}>
        <Button>{ btnTitle }</Button>
      </div>
    );
  }
}

export default CommonBtnComp;