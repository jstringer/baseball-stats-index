const db = require('../../db/db');

const getPlayerByName = function(firstName, lastName) {
  return db.query(
    'SELECT * FROM "Baseball"."People" ppl WHERE ppl."nameFirst" = $1::text OR ppl."nameLast" = $2::text',
     [firstName, lastName]);
}

module.exports = {
  getPlayerByName
}