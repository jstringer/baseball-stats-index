const db = require('../../utilities/db');

const getPlayerByFirstAndLastName = function(nameFirst, nameLast) {
  return db('Baseball.People').select().where({
    'nameFirst': nameFirst,
    'nameLast': nameLast
  });
}

const getPlayerByPartial = function(term) {
  return db('Baseball.People').select(db.raw("CONCAT_WS(' ', \"nameFirst\", \"nameLast\") AS nameFull"))
    .where(db.raw("CONCAT_WS(' ', \"nameFirst\", \"nameLast\")"), 'like', `%${term}%`)
}

module.exports = {
  getPlayerByFirstAndLastName,
  getPlayerByPartial
}