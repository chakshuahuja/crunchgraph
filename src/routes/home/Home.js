/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Arbiter from 'promissory-arbiter';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Graph from '../../components/Graph/Graph';

class Home extends React.Component {

  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
  state = { data: null }

  componentDidMount() {
    Arbiter.subscribe('data_fetched', d => {
      this.setState({ data: d });
    });
  }
  render() {
    console.log(this.state);
    let graph = null;
    if (this.state.data !== null) {
      graph = <Graph key={JSON.stringify(this.state.data)} data={this.state.data} />;
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          {graph}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
