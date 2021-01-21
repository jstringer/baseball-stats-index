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
  return db('Baseball.People').select().where('playerID', id);
}

const getPlayerBattingById = function(id) {
  return db('Baseball.Batting').select().where('playerID', id);
}

const getPlayerFieldingById = function(id) {
  return db('Baseball.Fielding').select().where('playerID', id);
}

const getPlayerPitchingById = function(id) {
  return db('Baseball.Pitching').select().where('playerID', id);
}

module.exports = {
  getPlayerByFirstAndLastName,
  getPlayerByPartial,
  getPlayerById,
  getPlayerBattingById,
  getPlayerFieldingById,
  getPlayerPitchingById
}