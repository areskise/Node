const Room = require('../models/room');

exports.getRooms = (req, res, next) => {
    Room.find()
        .then(rooms => {
            res.send(rooms);
        })
        .catch(err => console.log(err));
};

exports.getRoom = (req, res, next) => {
    const roomId = req.params.roomId;
    Room.findById(roomId)
        .then(room => {
            res.send(room)
        })
        .catch(err => console.log(err));
};

exports.postNewRoom = (req, res, next) => {
    const newRoom = new Room(req.body)
    newRoom.save()
    .then(results => {
        console.log('ADDED ROOM: ',results);
        res.status(200).end();
    })
    .catch(err => console.log(err));
};

exports.deleteRoom = (req, res, next) => {
    const roomId = req.params.roomId;
    Room.findByIdAndRemove(roomId)
        .then(results => {
            console.log('DELETED ROOM: ',results);
            res.status(200).end();
        })
        .catch(err => console.log(err));
};

exports.editRoom = (req, res, next) => {
    const roomId = req.params.roomId;
    Room.findByIdAndUpdate(roomId, req.body, {new: true})
        .then(results => {
            console.log('UPDATED ROOM: ',results);
            res.status(200).end();
        })
        .catch(err => console.log(err));
};