import express from 'express';
import neo4j from 'neo4j';

const router = express.Router();

const db = new neo4j.GraphDatabase({
  url: 'http://10.1.10.157:7474',
  auth: { username: 'neo4j', password: 'pear' },
});

const sampleQuery = 'MATCH (o:Organization {company_name:{company_name}})' +
  '-[r:ACQUIRED]->(a) return r,a';

const pairwise = (list) => {
  if (list.length < 2) { return []; }
  const first = list[0];
  const rest = list.slice(1);
  const pairs = rest.map(x => [first, x]);
  return pairs.concat(pairwise(rest));
};

router.get('/nodes', (req, res): void => {
  const { ids = [] } = req.query;
  if (!ids.length || !ids.map) {
    res.json({});
    return;
  }
  const queries = ids.map(id => ({
    query: 'MATCH (n) WHERE ID(n) = {id} return n',
    params: { id: Number(id) },
  }));
  db.cypher({ queries }, (err, results) => {
    res.json(results.map(r => (r.length ? r[0].n : null)));
  });
});

router.get('/shortestPaths', (req, res): void => {
  const { ids = [] } = req.query;
  const fPart = `match ${ids.map(id => `(e${id})`).join(',')}
  where ${ids.map(id => `ID(e${id}) = ${id}`).join(' and ')}`;
  const sPart = pairwise(ids).map(
    ([id1, id2]) =>
      `match p${id1}${id2}=allShortestPaths((e${id1})-[*]-(e${id2}))`,
  ).join('\n');
  const lPart = pairwise(ids).map(
    ([id1, id2]) => `p${id1}${id2}`,
  ).join(',');

  const query = `${fPart}\n${sPart}\nreturn ${lPart} limit 50`;
  console.log(query);
  const relationships = [];
  const nodes = [];
  db.http({
    method: 'POST',
    path: '/db/data/transaction/commit',
    raw: true,
    body: {
      statements: [
        { statement: query, parameters: {}, resultDataContents: ['row', 'graph'] },
      ],
    },
  }, (err, resp) => {
    if (err) throw err;
    console.log(resp.statusCode, 200);
    const data = resp.body.results[0].data.map(d => d.graph)[0];
    res.json(data);
  });
  // db.cypher({ query, lean: true }, (err, results) => {
  //   results.forEach(result => {
  //     Object.values(result).forEach(p => {
  //       relationships.push(...p.relationships);
  //       nodes.push(...p.nodes);
  //     });
  //   });
  //   console.log(relationships[0], nodes[0]);
  //   res.json(results);
  // });
//  res.send('Okay');
});

router.get('/', (req, res) => {
  const cb = (err, results) => {
    if (err) throw err;
    res.json({
      status: 'Okay',
      results,
    });
  };
  db.cypher(
    {
      query: sampleQuery,
      params: { company_name: 'Facebook' },
    },
    cb,
  );

  res.send('OK');
});
export default router;
