const User = require('../models/user');
const Coach = require('../models/coach');
const Booking = require('../models/booking');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const stripe = require("stripe")(process.env.STRIPE_SECRET);

/**
 * @swagger
 * /api/postbooking/:coach_id:
 *   post:
 *     summary: Create Checkout Session for Booking
 *     description: Creates a Stripe checkout session for a user to book a coaching session with a specific coach.
 *     parameters:
 *       - name: coach_id
 *         in: path
 *         required: true
 *         description: Unique identifier of the coach for whom the session is being booked.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               session_type:
 *                 type: string
 *                 description: Type of coaching session (e.g., "in-person", "online")
 *                 required: true
 *               # Additional properties might be required based on session type (e.g., location for in-person)
 *     responses:
 *       200:
 *         description: Checkout session created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates successful session creation
 *                 message:
 *                   type: string
 *                   description: Success message (e.g., "Successfully Paid")
 *                 session:
 *                   type: object
 *                   description: The created Stripe checkout session object
 *       401:
 *         description: Unauthorized (missing or invalid authorization token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating unauthorized access
 *       500:
 *         description: Internal Server Error (error creating checkout session)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 message:
 *                   type: string
 *                   description: Error message indicating failed session creation
 */

const getCheckoutSession = async (req,res) => {
    try{

        const coach = await Coach.findById(req.params.coach_id)      
        const token = req.headers.authorization.split(' ')[1];
        const number_sessions = req.body.number_sessions;
        const price = req.body.price;
        if (!token) {
          return res.status(401).json({ error: 'Token is missing or invalid' });
        }
        const decoded = jwt.verify(token, 'secret');
        const user = decoded.id;

        const userName = decoded.fullname;

        const stripe = require("stripe")(process.env.STRIPE_SECRET);

        const sessionType = coach.availability;

        let location = '';
        if (sessionType === 'in-person') {
            location = user.location ;
        } else if(sessionType === 'online'){
            location = 'Google Meet';
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            success_url: 'http://localhost:3000/checkout-success' ,
            cancel_url: 'http://localhost:3000/checkout-failed' ,
            customer_email : user.email,
            client_reference_id : req.params.coach_id,
            line_items:[
                {
                    price_data :{
                        currency: "USD",
                        unit_amount: price * 100,
                        product_data : {
                            name : coach.fullname,
                            description : coach.bio,

                        }
                    },
                    quantity : 1
                }
            ]
        })

        const booking = new Booking({
            coach_id: coach._id,
            username: userName,
            price,
            session: session.id,
            sessionType,
            number_sessions,
            location
        })

        await booking.save()
        res.status(200).json({success: true , message: 'Successfully Paid' , sessionId: session.id, sessionUrl: session.url });

    } catch (err){
        console.log(err);
        
        res
        .status(500)
        .json({success: false , message: 'Error Creating Checkout session'});
    }

}

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get All Bookings
 *     description: Retrieves a list of all booking entries from the database.
 *     responses:
 *       200:
 *         description: Bookings retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/models/booking'
 *       500:
 *         description: Internal Server Error (error retrieving bookings)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating failed retrieval of bookings
 *
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *           description: User's ID (references User model)
 *         coach_id:
 *           type: string
 *           description: Coach's ID (references Coach model)
 *           required: true
 *         date:
 *           type: string
 *           description: Booking date and time in YYYY/MM/DD // HH/MM format (pre-formatted on save)
 *         sessionType:
 *           type: string
 *           description: Type of coaching session (online or in-person)
 *           enum: ['online', 'in-person']
 *           required: true
 *         price:
 *           type: number
 *           description: Booking price
 *           required: true
 *         location:
 *           type: string
 *           description: Location of the booking (optional, for in-person sessions)
 *         session:
 *           type: string
 *           description: Session details (optional)
 *         createdAt:
 *           type: string
 *           description: Booking creation timestamp (automatically generated)
 *         updatedAt:
 *           type: string
 *           description: Booking update timestamp (automatically generated on modifications)
 *       required:
 *         - coach_id
 *         - sessionType
 *         - price
 *       example:
 *         _id: "63beb88b472f22dcb29b4999" (removed as per schema toJSON transform)
 *         user_id: "63beb85b472f22dcb29b499a"
 *         coach_id: "63beb82b472f22dcb29b4998"
 *         date: "2024/04/13 // 14/33" (formatted on save)
 *         sessionType: "online"
 *         price: 50
 *         location: "N/A" (optional for online sessions)
 *         session: "Zoom meeting link" (optional)
 *         createdAt: "2024-04-13T14:33:00.000Z"
 *         updatedAt: "2024-04-13T14:33:00.000Z"
 */

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();

        res.status(200).json({bookings});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to retrieve bookings' });
    }
};

/**
 * @swagger
 * /api/bookings/:id:
 *   get:
 *     summary: Get Booking by ID
 *     description: Retrieves a specific booking entry based on its unique identifier.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier of the booking to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/models/booking'
 *       404:
 *         description: Booking not found (no booking found with the provided ID)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating booking not found
 *       500:
 *         description: Internal Server Error (error retrieving booking)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating failed retrieval of booking
 */

const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        res.status(200).json({booking});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to update booking' });
    }
};

const getBookingsByUserId = async (req, res) => {
    try {
        const coachId = req.params.id;
        const bookings = await Booking.find({ coach_id: coachId });

        if (!bookings.length) {
            return res.status(404).json({ success: false, error: 'No bookings found for this user' });
        }

        res.status(200).json({ success: true, bookings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to get bookings' });
    }
};


/**
 * @swagger
 * /api/bookings/:id:
 *   put:
 *     summary: Update Booking
 *     description: Updates a booking entry based on its unique identifier and provided data.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier of the booking to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             # Adjust properties based on your updatable booking fields
 *             # (e.g., date, sessionType, price, location, session)
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 description: Booking date and time (optional, format might differ based on implementation)
 *               sessionType:
 *                 type: string
 *                 description: Type of coaching session (optional, online or in-person)
 *                 enum: ['online', 'in-person']
 *               price:
 *                 type: number
 *                 description: Booking price (optional)
 *               location:
 *                 type: string
 *                 description: Location of the booking (optional, for in-person sessions)
 *               session:
 *                 type: string
 *                 description: Session details (optional)
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/models/booking'
 *       400:
 *         description: Bad Request (invalid update data or validation errors)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating invalid update data or validation errors
 *       404:
 *         description: Booking not found (no booking found with the provided ID)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating booking not found
 *       500:
 *         description: Internal Server Error (error updating booking)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating failed update of booking
 */

const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        await CalendarService.updateBookingInCalendar(booking);

        res.status(200).json({ success: true, data: booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to update booking' });
    }
};

/**
 * @swagger
 * /api/bookings/:id:
 *   delete:
 *     summary: Delete Booking
 *     description: Deletes a booking entry based on its unique identifier.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Unique identifier of the booking to delete.
 *         schema:
 *           type: string
     responses:
 *       200:
 *         description: Booking deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to true for success
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Success message indicating booking deletion
 *       404:
 *         description: Booking not found (no booking found with the provided ID)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating booking not found
 *       500:
 *         description: Internal Server Error (error deleting booking)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Set to false for error
 *                 error:
 *                   type: string
 *                   description: Error message indicating failed deletion of booking
 */

const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if(!booking){
        res.status(404).json({message:'Booking Not Found'});
        }

        res.status(200).json({ success: true, data: {message: 'Booking Deleted'} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to delete booking' });
    }
};

module.exports = {
    getCheckoutSession,
    deleteBooking,
    updateBooking,
    getAllBookings,
    getBookingById,
    getBookingsByUserId
}