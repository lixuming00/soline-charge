import React, {Component} from 'react';
import Head from 'next/head';

class CommonTitleComp extends Component {
  render() {
    return (
      <Head>
        <title>soline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }
}

export default CommonTitleComp;