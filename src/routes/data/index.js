import express from 'express';
import neo4j from 'neo4j';

const router = express.Router();

const db = new neo4j.GraphDatabase({
  url: 'http://192.168.0.100:7474',
  auth: { username: 'neo4j', password: 'pear' },
});

const query = 'MATCH (o:Organization {company_name:{company_name}})' +
  '-[r:ACQUIRED]->(a) return r,a';

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
      query,
      params: { company_name: 'Facebook' },
    },
    cb,
  );

  res.send('OK');
});

export default router;
