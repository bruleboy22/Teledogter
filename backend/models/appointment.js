const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    veterinarian_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    appointment_date: {
        type: Date,
        required: null
    },
    reason_for_visit: {
        type: String,
        required: null
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


