import React, { Component } from 'react';

class PersonPortrait extends Component {
  render() {
    return (
      <div className={'person-portrait-wrapper'}>
        
        <div className='pertrait-img'>
	        <img className={`pertrait-img`} src="/statics/personImgs/headImg.png" alt="" />
	        <div className="edit">
	        	<img src="/statics/personImgs/edit-person.png" alt="" />
	        </div>
        </div>

        <div className="pertrait-info">
        	<span>睡了吃</span>
        	<span className={`center-span`}>UID</span>
        	<span className={`right-span`}>28859</span>
        </div>

      </div>
    );
  }
}

export default PersonPortrait;