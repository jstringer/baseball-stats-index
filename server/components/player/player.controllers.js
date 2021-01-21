const playerServices = require('./player.services');

const getPlayerByName = async (req, res) => {
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

const getPlayerById = async (req, res) => {
  const id = req.params.playerId;

  try {
    const player = await playerServices.getPlayerById(id);
    res.status(200).json(player);
  }
  catch(error) {
    console.log(error);
    res.status(400).end()
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
  getPlayerByName,
  getPlayerById,
  getPlayerByMatch
}