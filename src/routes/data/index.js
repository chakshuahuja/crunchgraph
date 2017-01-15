import express from 'express';
import neo4j from 'neo4j';

const router = express.Router();

const db = new neo4j.GraphDatabase({
  url: 'http://192.168.0.100:7474',
  auth: { username: 'neo4j', password: 'pear' },
});

const query = 'MATCH (o:Organization {company_name:{company_name}})' +
  '-[r:ACQUIRED]->(a) return r,a';

router.get('/', (req, res) => {
  db.cypher(
    {
      query,
      params: { company_name: 'Facebook' },
    },
    (err, results) => {
      if (err) throw err;
      // results.forEach(r => console.log(r.p.relationships[0]));
      res.json({
        status: 'Okay',
        results,
      });
    },
  );
});

export default router;
