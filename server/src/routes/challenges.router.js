const express = require('express');
const router = express.Router();

const {listChallenges, createChallenge, getChallenge, deleteChallenge, updateChallenge}
    = require('../controllers/challenges.controller');

const { authenticateToken } = require('../controllers/users.controller');

router.get('/', listChallenges);
router.post('/', authenticateToken, createChallenge);
router.get('/:id', getChallenge);
router.delete('/:id', deleteChallenge);
router.patch('/:id', authenticateToken, updateChallenge);

module.exports = router;