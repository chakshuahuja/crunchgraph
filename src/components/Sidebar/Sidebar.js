/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Arbiter from 'promissory-arbiter';

import s from './Sidebar.css';


const infoBoxStyle = {
  overflow: 'auto',
  color: 'blue',
  borderTop: '3px solid #b3d4fc',
  paddingLeft: '12px',
  marginTop: '10px',
  fontSize: '12px',
  height: '400px',
};

class Sidebar extends React.Component {
  state = { nodes: ['530896', '623209'] }
  onType = (e, i) => {
    const nodes = [...this.state.nodes];
    nodes[i] = e.target.value;
    this.setState({ nodes });
  }
  addMore = () => {
    const nodes = [...this.state.nodes];
    nodes.push('');
    this.setState({ nodes });
  }

  find = () => {
    const nodes = [...this.state.nodes];
    const url = `http://localhost:3001/data/shortestPaths?${nodes.map(n => `ids[]=${n}`).join('&')}`;
    fetch(url)
    .then(r => r.json())
    .then(d => Arbiter.publish('data_fetched', d));
  }

  render() {
    const that = this;
    return (
      <div className={s.root}>
        {this.state.nodes.map((n, i) => (
          <div key={i}>
              Enter node:< br />
            <input type="text" name="id[]" value={n} onChange={(e) => that.onType(e, i)} /><br />
          </div>
          ))}
        <button onClick={this.find} value="Find">Find< /button>
        <div><button onClick={this.addMore}>+</button></div>
        <div className="node-selected-info" id="node-selected" style={infoBoxStyle}>Information of node selected</div>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
