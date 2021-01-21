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

const getPlayerById = function(id) {
  return db('Baseball.People').select()
    .where('playerID', id);
}

module.exports = {
  getPlayerByFirstAndLastName,
  getPlayerByPartial,
  getPlayerById
}