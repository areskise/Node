const express = require('express');

const { verifyToken } = require('../middlewares/is-auth');
const controllers = require('../controllers/session');

const router = express.Router();

router.get('/chatrooms/getById', verifyToken, controllers.getMessageByRoomId);

router.post('/chatrooms/createNewRoom', verifyToken, controllers.createNewRoom);

router.put('/chatrooms/addMessage', verifyToken, controllers.addMessage);

module.exports = router;