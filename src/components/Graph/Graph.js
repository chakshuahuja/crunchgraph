import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import vis from 'vis';

import s from './Graph.css';


class Graph extends React.Component {
  componentDidMount(): void {
    const { data: dumpData } = this.props;
//    const {nodes, relationships} = dumpData;
    const nodes = new vis.DataSet(dumpData.nodes);

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
