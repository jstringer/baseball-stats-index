const playerServices = require('./player.services');

const getPlayer = async (req, res) => {
  const nameFirst = req.body.nameFirst;
  const nameLast = req.body.nameLast;

  try {
    const player = await playerServices.getPlayerByFirstAndLastName(nameFirst, nameLast);
    res.status(200).json(player);
  }
  catch(error) {
    console.log(error);
    res.status(400).end();
  }
}

const getPlayerByMatch = async (req, res) => {
  const term = req.query.term;

  try {
    const player = await playerServices.getPlayerByPartial(term);
    res.status(200).json(player);
  }

  catch(error) {
    console.log(error);
    res.status(400).end();
  }
}

module.exports = {
  getPlayer,
  getPlayerByMatch
}