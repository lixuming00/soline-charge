import React, {Component} from 'react';
import { CommonTitleComp } from '../src/components/common-comp';
import { PersonPortrait, PersonService, PersonStatusComp } from '../src/components/person';
import { Nav } from '../src/config/person-config';

export default class Index extends Component {
  render() {
    return (
      <div className={`person-wrapper`}>
        <CommonTitleComp />
        <PersonPortrait />
        <PersonStatusComp />
        <PersonService person={ Nav } />
      </div>
    );
  }
}



