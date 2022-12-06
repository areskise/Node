const express = require('express');

const hotelController = require('../controllers/hotel');

const router = express.Router();

router.get('/hotels', hotelController.getHotels);

router.get('/hotels/city', hotelController.getHotelsByCity);

router.get('/hotels/type', hotelController.getHotelsByType);

router.get('/hotels/Top3', hotelController.getHotelsByTop3);

router.get('/hotels/search', hotelController.getHotelsBySearch);

router.get('/hotels/:hotelId', hotelController.getHotelById);

router.post('/new-hotel', hotelController.postNewHotel);

router.delete('/delete-hotel', hotelController.deleteHotel);

router.put('/edit-hotel/:hotelId', hotelController.editHotel);

module.exports = router;