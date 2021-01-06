const playerServices = require('./player.services');

const getPlayer = async (req, res) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  try {
    console.log(firstName, lastName);
    const player = await playerServices.getPlayerByName(firstName, lastName);
    res.status(200).json(player);
  }
  catch {
    res.status(400).end();
  }
}

module.exports = {
  getPlayer
}