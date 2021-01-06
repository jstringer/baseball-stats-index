const { Router } = require('express');
const controllers = require('./player.controllers');

const router = Router();

// api/player/
router
  .route('/')
  .get(controllers.getPlayer);

module.exports = router;