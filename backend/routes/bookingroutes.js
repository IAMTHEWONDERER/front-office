const express = require('express');
const bookingController = require('../controllers/bookingcontrollers');
const {isAuthenticated} = require('../middlewares/protectRoute');
const checkUser = require('../middlewares/checkUser');
const checkAdmin = require('../middlewares/checkAdmin');
const checkUserAdmin = require('../middlewares/checkUserAdmin');
const bookingrouter = express.Router();

bookingrouter.post('/postbooking/:coach_id' ,  bookingController.getCheckoutSession);
bookingrouter.get('/bookings', isAuthenticated , checkAdmin , bookingController.getAllBookings);
bookingrouter.get('/bookings/:id',isAuthenticated, checkUserAdmin , bookingController.getBookingById);
bookingrouter.get('/bookingscoach/:id' , bookingController.getBookingsByUserId);
bookingrouter.put('/bookings/:id', isAuthenticated, checkUserAdmin , bookingController.updateBooking);
bookingrouter.delete('/bookings/:id', isAuthenticated, checkUserAdmin , bookingController.deleteBooking);

module.exports = bookingrouter ;