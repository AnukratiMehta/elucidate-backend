// userController.js
const express = require('express');
const router = express.Router();
let dummyData = require('./dummyData');

// GET /users
router.get('/', (req, res) => {
  res.json(dummyData.slice(0, 10));
});

// GET /users/:userId
router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = dummyData.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE /users/:userId
router.delete('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const updatedData = dummyData.filter(u => u.id !== userId);

  if (updatedData.length < dummyData.length) {
    dummyData = updatedData;
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
