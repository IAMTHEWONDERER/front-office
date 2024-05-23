const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coachSchema = new Schema({

  fullname: {
    type: String,
    required: true,
    max : 64
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
  type: String,
  default: 'coach'
  },

  gender: {
  type: String,
  required: true,
  enum: ['male','female']
  },
 
  city: {
  type: String
  },

  Totalprofit: {
    type: Number
  },

  address: {
  type: String
  },

  image: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },

  flag_system: {
  type: String,
  enum: ['banned' , 'not banned'],
  default: 'not banned'
  },

  bank_details: {
  type: String
  },

  phone_number: {
  type: Number
  },

  bio: {
  type: String
  },

  price: {
    sessions_3: { type: Number, required: true },
    sessions_6: { type: Number, required: true },
    sessions_12: { type: Number, required: true },
    sessions_24: { type: Number, required: true },
  },

  cv: {
    public_id: String,
    url: String,  
  },

  cin: {
    public_id: String,
    url: String,  
  },

  rating: {
    type: Number,
    default: 0   
  },

  number_of_ratings: {
    type: Number
  },
  
  availability: {
  type: String,
  enum: ['online' , 'In-person' , 'All-in-one']
  }
},

{
     toJSON: {
      transform(doc,ret){
        delete ret.password;
        delete ret.__v;
        delete ret.updatedAt;
        delete ret.role; 
        delete ret.bank_details; 
        delete ret.price;
    }
  }
},{timestamps: true});

module.exports = coach = mongoose.model('coach', coachSchema);