const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  username: {
    type: String,
    ref: 'User',
  },
  coach_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  sessionType: {
    type: String,
    enum: ['online', 'In-person' , 'All-in-one'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
  },
  session: {
    type: String 
  },
  number_sessions: {
    type: Number ,
  }

}, {
  toJSON: {
    transform(doc, ret) {
      delete ret.__v;
    }
  }
}, { timestamps: true });

bookingSchema.pre('save', function (next) {

  const year = this.date.getFullYear();
  const month = String(this.date.getMonth() + 1).padStart(2, '0');
  const day = String(this.date.getDate()).padStart(2, '0');
  const hours = String(this.date.getHours()).padStart(2, '0');
  const minutes = String(this.date.getMinutes()).padStart(2, '0');

  this.date = `${year}/${month}/${day} // ${hours}/${minutes}`;

  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
