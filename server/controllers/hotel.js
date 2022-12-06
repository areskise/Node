const Hotel = require('../models/hotel');
const Room = require('../models/room');

exports.getHotels = (req, res, next) => {
    Hotel.find()
        .then(hotels => {
            res.send(hotels);
        })
        .catch(err => console.log(err));
};

exports.getHotelsByCity = (req, res, next) => {
    Hotel.find({city: req.query.city})
        .then(hotels => {
            res.send(hotels);
        })
        .catch(err => console.log(err));
};

exports.getHotelsByType = (req, res, next) => {
    Hotel.find({type: req.query.type})
        .then(hotels => {
            res.send(hotels);
        })
        .catch(err => console.log(err));
};

exports.getHotelsByTop3 = (req, res, next) => {
    Hotel.find().sort({rating: 'desc'}).limit(3)
        .then(hotels => {
            res.send(hotels);
        })
        .catch(err => console.log(err));
};

exports.getHotelsBySearch = async (req, res, next) => {
    const numPeople = Math.floor(+req.query.options.adult + (+req.query.options.children/2));
    const numRooms = +req.query.options.room;
    const minPrice = +req.query.options.minPrice;
    const maxPrice = +req.query.options.maxPrice;

    const rooms = await Room.find({
        maxPeople: {$gte: numPeople},
    })
    const roomIds = rooms.map(room => room._id.toString());
    
    Hotel.find({
        city: {$regex: req.query.destination, $options: 'i'},
        cheapestPrice: {$gte: minPrice || 0 , $lte: maxPrice || Infinity }
    })
        .then(hotels => {
            const result = hotels.filter(hotel => {
                const roomId = hotel.rooms.filter(room => {
                    if(roomIds.includes(room)){
                        return room
                    }
                })
                if(roomId.length >= numRooms){
                    return hotel
                }
            })
            res.send(result)
        })
        .catch(err => console.log(err));
};

exports.getHotelById = (req, res, next) => {
    const hotelId = req.params.hotelId;
    Hotel.findById(hotelId)
        .populate('rooms')
        .then(hotel => {
            res.send(hotel)
        })
        .catch(err => console.log(err));
};

exports.postNewHotel = (req, res, next) => {
    const newHotel = new Hotel(req.body)
    newHotel.save()
        .then(results => {
            console.log('ADDED HOTEL: ',results);
            res.status(200).end();
        })
        .catch(err => console.log(err));
};

exports.deleteHotel = (req, res, next) => {
    const hotelId = req.params.hotelId;
    Hotel.findByIdAndRemove(hotelId)
        .then(results => {
            console.log('DELETED HOTEL: ',results);
            res.status(200).end();
        })
        .catch(err => console.log(err));
};

exports.editHotel = (req, res, next) => {
    const hotelId = req.params.hotelId;
    Hotel.findByIdAndUpdate(hotelId, req.body, {new: true})
        .then(results => {
            console.log('UPDATED HOTEL: ',results);
            res.status(200).end();
        })
        .catch(err => console.log(err));
};