const db = require('../../utilities/db');

const getPlayerByFirstAndLastName = function(nameFirst, nameLast) {
  return db('Baseball.People').select().where({
    'nameFirst': nameFirst,
    'nameLast': nameLast
  });
}

const getPlayerByPartial = function(term) {
  return db('Baseball.People').select('nameFirst', 'nameLast', 'playerID')
    .where(db.raw("CONCAT_WS(' ', \"nameFirst\", \"nameLast\")"), 'ilike', `%${term}%`)
}

module.exports = {
  getPlayerByFirstAndLastName,
  getPlayerByPartial
}