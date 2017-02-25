import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import vis from 'vis';

import s from './Graph.css';
const options = {
  groups: {
    usergroups: {
      shape: 'icon',
      icon: {
        face: 'Ionicons',
        code: '\uf47c',
        size: 50,
        color: '#57169a',
      },
    },
    users: {
      shape: 'icon',
      icon: {
        face: 'Ionicons',
        code: '\uf47e',
        size: 50,
        color: '#aa00ff',
      },
    },
  },
};
const rel_color = { WORKS: '#a00', COMPETITOR: 'green', INVESTED_IN: 'black', ACQUIRED: 'blue' };
class Graph extends React.Component {
  componentDidMount(): void {
    const { data: dump_data } = this.props;
    const nods = dump_data.nodes.map(n => {
      const t = ({ id: n.id, type: n.labels[0], properties: n.properties });
      if (t.type === 'Person') {
        t.label = `${t.properties.first_name} ${t.properties.last_name}`;
        t.group = 'users';
        return t;
      }
      if (t.type = 'Organization') {
        t.shape = 'icon';
        t.label = t.properties.company_name;
        t.icon = { face: 'Ionicons', code: '\uf276', size: 50, color: '#f0a30a' };
        return t;
      }
    });

    console.log(nods);
    const rels = dump_data.relationships.map(r => ({ from: Number(r.startNode), length: 500, to: Number(r.endNode), arrows: 'to', label: r.type, width: 2, color: { color: rel_color[r.type] }, properties: r.properties }));

    // create an array with edges
    const nodes = new vis.DataSet(nods);
    const edges = new vis.DataSet(rels);
    const data = {
      nodes,
      edges,
    };
    // const options = {};
    // eslint-disable-next-line no-unused-vars
    const network = new vis.Network(this.container, data, options);
    network.on('click', ((NODES) => function (params) {
      params.event = '[original event]';
      const nodeId = params.nodes[0];
      const clickedNode = NODES.filter(n => n.id === nodeId)[0];
      document.getElementById('node-selected').innerHTML = `<h3>Detailed information:</h3>${
//        'facebook_url:<a href="'}${clickedNode.properties.facebook_url}">${clickedNode.properties.facebook_url}</a>` +
//        `<br />cb_url: <a href="${clickedNode.properties.cb_url}">${clickedNode.properties.cb_url}</a>`;
         JSON.stringify(clickedNode, null, 4)}`;
    })(nods));
  }
  container: null;
  render() {
    return <div className={s.root} ref={r => { this.container = r; }} />;
  }
}

export default withStyles(s)(Graph);
