const Room = require('../models/room');

exports.getRooms = async (req, res, next) => {
    const limit = req.query.limit;
    const page = req.query.page ? req.query.page : 1
    const skip = (page - 1) * limit
    
    const count = await Room.find().then(rooms => {
        return rooms.length
    })

    Room.find().limit(limit).skip(skip)
        .then(rooms => {
            res.json({
                rooms: rooms,
                count: count
            });
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