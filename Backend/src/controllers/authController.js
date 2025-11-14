const authService = require('../services/authService');
const result = require('../utils/result');


const authController = {

    register: async (req, res) => {
        try {
            const { first_name, last_name, email, password, confirmPassword, mobile, birthDate } = req.body;
            await authService.register(first_name, last_name, email, password,confirmPassword, mobile, birthDate);
            res.send(result.createResult(null,{message:'User registered successfully'}));    
    }
    catch (error) {
        res.send(result.createResult(error));
    }
},

    login: async (req, res) => {
        try{
            const { email, password } = req.body;
            const loginData = await authService.login(email, password);
            
             res.send(result.createResult(null, loginData));
        }
        catch(error){
             res.send(result.createResult(error.message));
        }
    }
};

module.exports = authController;


