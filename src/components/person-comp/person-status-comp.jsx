import React, {Component} from 'react';

class PersonStatusComp extends Component {
  render() {
    return (
      <div className='person-status-wrapper'>
        <div className="column">
	        <span>32</span>
	        <span className={`bottom_span`}>余额</span>
        </div>

        <div className="column">
	        <span>99</span>
	        <span className={`bottom_span`}>押金</span>
        </div>

        <div className="column">
	        <span>已归还</span>
	        <span className={`bottom_span`}>状态</span>
        </div>
      </div>
    );
  }
}

export default PersonStatusComp;