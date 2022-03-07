import React, {Component} from 'react';
import Link from 'next/link';

class PersonService extends Component {
  render() {
    const { person } = this.props;

    return (
    <div className='person-service-wrapper'>

      {
        person.map((item,i) => {
          return (
            <Link href={item.href} key={i}>
              <div className="person-service-item">
                <div className="left">
                  <img src={item.icon} alt="" />
                  <span>{item.title}</span>
                </div>

                <div className="right"> > </div>
              </div>
            </Link>

          )
        })
      }

      </div>
    );
  }
}

export default PersonService;