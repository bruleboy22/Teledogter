const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    veterinarian_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    appointment_date: {
        type: Date,
        required: true // Updated
      },
      patientName: {
        type: String,
        required: true
    },
      reason_for_visit: {
        type: String,
        required: true // Updated
      },
    notes: {
        type: String
    },
    status: {
        type: String,
        enum: ['scheduled', 'cancelled', 'completed', 'missed'],
        default: 'scheduled'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema);


