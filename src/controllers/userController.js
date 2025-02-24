const { addUser,getUserByEmail } = require('../models/userModel');
const bcrypt = require('bcrypt');
const auth = require("../middleware/auth");
const jwt = require('jsonwebtoken');

async function register(req, res) {
    try {
        const userData = req.body;
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        const userId = await addUser(userData);
        res.status(201).send({ message: 'User added successfully', userId: userId });
    } catch (error) {
        res.status(500).send({ message: 'Error adding user', error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (!user.password) {
            return res.status(500).send({ message: 'Password is missing in the database' });
        }

        const isMatch = await bcrypt.compare(password.trim(), user.password.trim());

        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid password' });
        }

        const token = jwt.sign(  {
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,        
            password: user.password   
        }, 'myjwttoken', { expiresIn: '1h' })

        res.status(200).send({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).send({ message: 'Error logging in', error: error.message });
    }
}

async function myProfile(req,res){
    try {
        const user = req.user;
        res.status(200).send({
            user: {
                fullName: user.fullName, 
                userName: user.userName,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).send({ message: 'Error fetching user profile', error: error.message });
    }
}

module.exports = { register, login, myProfile };
