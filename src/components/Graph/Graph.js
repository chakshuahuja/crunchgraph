import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import vis from 'vis';

import s from './Graph.css';

class Graph extends React.Component {
  componentDidMount(): void {
    const nodes = new vis.DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ]);

    // create an array with edges
    const edges = new vis.DataSet([
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ]);
    const data = {
      nodes,
      edges,
    };
    const options = {};
    // eslint-disable-next-line no-unused-vars
    const network = new vis.Network(this.container, data, options);
  }
  container: null;
  render() {
    return <div className={s.root} ref={r => { this.container = r; }} />;
  }
}

export default withStyles(s)(Graph);
