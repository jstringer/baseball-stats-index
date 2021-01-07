const db = require('../../utilities/db');

const getPlayerByFirstAndLastName = function(nameFirst, nameLast) {
  return db('Baseball.People').select().where({
    'nameFirst': nameFirst,
    'nameLast': nameLast
  });
}

const getPlayerByPartial = function(term) {
  return db('Baseball.People').select('nameFirst', 'nameLast')
  .where( (builder) => {
    if(term[1]) {
      return builder
        .where('nameFirst', 'like', `%${term[0]}%`)
        .where('nameLast', 'like', `%${term[1]}%`);
    }
    return builder
      .where('nameFirst', 'like', `%${term[0]}%`)
      .orWhere('nameLast', 'like', `%${term[0]}%`);
  });
}

module.exports = {
  getPlayerByFirstAndLastName,
  getPlayerByPartial
}