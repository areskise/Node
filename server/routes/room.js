const express = require('express');

const roomController = require('../controllers/room');

const router = express.Router();

router.get('/rooms', roomController.getRooms);

router.get('/room', roomController.getRoom);

router.post('/new-room', roomController.postNewRoom);

router.delete('/delete-room', roomController.deleteRoom);

router.put('/edit-room/:roomId', roomController.editRoom);

module.exports = router;