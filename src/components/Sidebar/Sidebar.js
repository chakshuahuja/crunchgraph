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
import s from './Sidebar.css';

const infoBoxStyle = {
  color: 'blue',
};

class Sidebar extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <form action="">
          Enter source node:< br />
          <input type="text" name="company1" /><br />
          Enter destination node:< br />
          <input type="text" name="company2" /><br />
          <button type="submit" value="Find">Find< /button>
        < /form>
        <div><button>+</button></div>
        <div className="node-selected-info" style={infoBoxStyle}>Information of node selected</div>
      </div>
    );
  }
}

export default withStyles(s)(Sidebar);
