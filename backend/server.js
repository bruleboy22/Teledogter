const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();


app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server is running onport ${PORT}.`);});


