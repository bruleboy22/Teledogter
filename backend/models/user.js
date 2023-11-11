const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, trim: true, required: true },
    emailId: { type: String, trim: true, required: true, unique: true },
    password: { type: String },
    role: { type: String }, // pet owner or veterinarian
    profile: {
        name: String,
        phone: String,
        address: String,
        profile_picture: String,
    },
    pets: [
        {
            name: String,
            species: String,
            breed: String,
            birthdate: Date,
            // Additional pet-specific fields
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
