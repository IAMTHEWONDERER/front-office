const express = require("express");
const coachcontrollers = require("../controllers/coachcontrollers");
const { createCoachValidationRules, validate } = require('../middlewares/coachValidator');
const coachroutes = express.Router();
coachroutes.use(express.json());

coachroutes.get('/getallcoaches', coachcontrollers.getAllCoaches);
coachroutes.get('/getcoach/:id', coachcontrollers.getCoachById);
coachroutes.get('/filtercoach', coachcontrollers.getCoachByFilter);
coachroutes.patch('/putcoach/:id',  coachcontrollers.updateCoachById);
coachroutes.delete('/deletecoach/:id', coachcontrollers.deleteCoachById);


module.exports = coachroutes ;