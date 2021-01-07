const { Router } = require('express');
const controllers = require('./player.controllers');

const router = Router();

// api/player/
router
  .route('/')
  .get(controllers.getPlayer);

// api/player/match
router
  .route('/match')
  .get(controllers.getPlayerByMatch)

module.exports = router;