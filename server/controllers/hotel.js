const Hotel = require('../models/hotel');

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

exports.getHotelById = (req, res, next) => {
    const hotelId = req.params.hotelId;
    Hotel.findById(hotelId)
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