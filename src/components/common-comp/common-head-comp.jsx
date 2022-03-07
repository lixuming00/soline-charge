import React, {Component} from 'react';
import Link from 'next/link';

class CommonHeadComp extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={`common-head-comp`}>
        <Link href={'/'}>
          <img src="/statics/arrow-left.png" alt=""/>
        </Link>
        <span className={`top-title`}>{title}</span>
      </div>
    );
  }
}

export default CommonHeadComp;