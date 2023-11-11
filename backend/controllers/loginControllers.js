const bcrypt = require('bcryptjs');
const Models = require("../models");
const axios = require('axios');

const getLogins = (res) => {
    Models.Login.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        const user = await Models.Login.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        
        try {
            const externalApiResponse = await axios.get('http://localhost:8080/api/users/');

        } catch (apiError) {
           
            console.error('API call error', apiError.response);
            
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }
    
        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                roles: user.roles
            },
        });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const updateLogin = (req, res) => {
    console.log(req.body)
    Models.Login.findByIdAndUpdate(req.params.id, req.body, {
useFindAndModify: false })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const deleteLogin = (req, res) => {
    Models.Login.findByIdAndDelete(req.params.id)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}



module.exports = {
    getLogins,
    login,
    updateLogin,
    deleteLogin,
};
