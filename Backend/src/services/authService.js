const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config/config');
const authUtils = require('../utils/auth');


const authService = {
    register: async (first_name, last_name, email, password, mobile, birth) => {
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashpassword = await bcrypt.hash(password, config.saltRounds || 10);
      
        const userId = await User.create(first_name, last_name, email, hashpassword, mobile, birth);
        return userId;
    },

    login: async(email,password) => {
        const dbUser = await User.findByEmail(email);

        if(!dbUser){
            throw new Error('invalid Email');
        }
        const userValid = await bcrypt.compare(password,dbUser.password);
        if(!userValid){
            throw new Error('Invlid password');
        }

        const payload = {uid:dbUser.user_id };

        const token = jwt.sign(payload, config.secret || process.env.JWT_SECRET); 

        return {
            token:token,
            first_name:dbUser.first_name,
            last_name: dbUser.last_name,
            email:dbUser.email
        };
    }
};
module.exports = authService;