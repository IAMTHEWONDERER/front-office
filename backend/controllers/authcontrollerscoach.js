const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const sendMailUser = require("../services/emailservice");
const multer = require('multer');

/**
 * @swagger
 * /api/registercoach:
 *   post:
 *     summary: Register a Coach
 *     description: Allows a coach to register with the platform.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 description: Coach's full name
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: Coach's email address
 *                 example: coach@example.com
 *               password:
 *                 type: string
 *                 description: Coach's password
 *               gender:
 *                 type: string
 *                 description: Coach's gender (optional)
 *               city:
 *                 type: string
 *                 description: Coach's city (optional)
 *               address:
 *                 type: string
 *                 description: Coach's address (optional)
 *     responses:
 *       200:
 *         description: Coach registered successfully
 *       400:
 *         description: Coach already exists or validation error
 *       500:
 *         description: Internal server error
 */

// Register function
const registercoach = async (req, res) => {
  try {
    
    if (!req.files || !req.files.image || !req.files.cv || !req.files.cin) {
      return res.status(400).send({ error: 'All files (image, cv, cin) are required' });
    }

    let session_3 , session_6 , session_9 , session_12 , session_24 ;
    const { fullname, email, password, gender, city, phone_number, address , availability } = req.body;

    const existingCoach = await coach.findOne({ email });
    if (existingCoach) {
      return res.status(400).json({ error: 'Coach already exists' });
    }

    let price;
    switch (availability) {
      case 'online':
        price = {
          sessions_3: 417,
          sessions_6: 774,
          sessions_12: 1428,
          sessions_24: 2616,
        };
        break;
      case 'All-in-one':
        price = {
          sessions_3: 507,
          sessions_6: 954,
          sessions_12: 1788,
          sessions_24: 3348,
        };
        break;
      case 'In-person':
        price = {
          sessions_3: 477,
          sessions_6: 894,
          sessions_12: 1668,
          sessions_24: 3000,
        };
        break;
      default:
        return res.status(400).json({ error: 'Invalid availability type' });
    }

    const newCoach = new coach({
      fullname,
      email,
      password,
      gender,
      city,
      address,
      phone_number,
      image: req.files.image[0].filename,
      cin: req.files.cin[0].filename, 
      cv: req.files.cv[0].filename,
      availability,
      price ,
    });

    const salt = await bcrypt.genSalt(10);
    newCoach.password = await bcrypt.hash(newCoach.password, salt);

    await newCoach.save();

    res.status(200).json({ message: 'Coach registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: 'An error occurred while registering coach' });
  }
};


/**
 * @swagger
 * /api/logincoach:
 *   post:
 *     summary: Login a Coach
 *     description: Allows a registered coach to login to the platform.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Coach's registered email address used for login. (Matches the 'email' field in the Coach model)
 *                 example: coach@example.com
 *               password:
 *                 type: string
 *                 description: Coach's password. (Not stored in plain text, but a hashed version. Matches the 'password' field in the Coach model)
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Login success indicator
 *                 token:
 *                   type: string
 *                   description: JWT access token (prefixed with "Bearer ")
 *       400:
 *         description: Bad Request (missing fields, invalid credentials)
 *       404:
 *         description: Coach not found (Coach with the provided email address not found in the database)
 *       500:
 *         description: Internal server error
 */

// Login function
logincoach = (req, res) => {
  const { email, password } = req.body;
  
  coach.findOne({ email })
    .then((coach) => {
      if (!coach) {
        return res.status(404).json({ message: "coach not found" });
      }
      
      bcrypt
        .compare(password, coach.password)
        .then((isMatch) => {
          if (isMatch) {
            const payload = { id: coach.id, fullname: coach.fullname };
            
            jwt.sign({ ...payload, role: coach.role }, "secret", { expiresIn: "7d" }, (err, token) => {
              if (err) {
                return res
                  .status(500)
                  .json({ message: "Failed to generate token", error: err });
              }
              res.json({ success: true, token: "Bearer " + token });
            });
          } else {
            
            res.status(400).json({ message: "Email or Password are incorrect" });
          }
        })      
        .catch((err) =>
          res
            .status(500)
            .json({ message: "Failed to compare passwords", error: err }),
        );
    })
    .catch((err) =>
      res.status(500).json({ message: "Database error login", error: err }),
    );
};

/**
 * @swagger
 * /api/forgot-password:
 *   post:
 *     summary: Initiate Password Reset for Coach
 *     description: Allows a coach to request a password reset link via email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Coach's registered email address.
 *                 example: coach@example.com
 *     responses:
 *       200:
 *         description: Password reset email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message indicating email sent
 *       404:
 *         description: Coach not found (Coach with the provided email address not found in the database)
 *       500:
 *         description: Internal server error (e.g., email sending failure)
 */

// Forgot password function
forgotPassword = (req, res) => {

  const { email } = req.body;
  User.findOne({ email })
    .then(async (user) => {
      if (!user) {
        return res.status(404).json({ err: "coach not found" });
      }
      
      const userForgot = user;

      const sendMailToUser = await sendMailUser({
        userEmail: email,
        resetLink: `http://localhost:${port}/reset/${userForgot._id}`,
      });
     
      if (!sendMailToUser) {
        return res.status(500).json({
          err: "internal server error related to forgot password",
        });
      }

      return res.status(200).json({
        message: "we have sent you an email with a link to reset your password",
      });
    })
    
    .catch((err) => {
      console.error("Error in forgot password:", err);
      return res.status(500).json({ err: "Internal server error" });
    });
};

/**
 * @swagger
 * /api/reset/:id:
 *   put:
 *     summary: Reset Coach Password
 *     description: Allows a coach to reset their password using a provided reset link (ID).
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Coach's unique identifier from the reset password link.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newPassword:
 *                 type: string
 *                 description: Coach's new password.
 *                 example: password123!
 *     responses:
 *       200:
 *         description: Password reset successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message indicating password reset
 *       400:
 *         description: Bad Request (missing new password)
 *       404:
 *         description: Coach not found (Coach with the provided ID not found in the database)
 *       500:
 *         description: Internal server error (e.g., database error)
 */

resetPassword = async (req, res) => {
  try {
    const coachId = req.params.id;
   
    const newPassword = req.body.newPassword;
    
    if (!newPassword) {
      return res.status(400).json({ error: "New password is required" });
    }
    
    const coach = await coach.findById(coachId);
    if (!coach) {
      return res.status(404).json({ error: "coach not found" });
    }

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    coach.password = hashedPassword;
    await coach.save();

    
    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error in resetting password:", error);
    return res.status(500).json({ error: "Internal server error in reset" });
  }
};
module.exports = { registercoach, logincoach, resetPassword, forgotPassword };