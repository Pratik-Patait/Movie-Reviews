const pool = require('../config/db');

const User = {
    findByEmail:async (email) => {
        try{
            const sql = `SELECT * FROM users WHERE email = ?`;
        const[rows] = await pool.execute(sql,[email]);
        return rows[0];
        }catch(error){
            console.error("Database Error(findByEmail):",error);
            throw error;
        }
    },

    create:async (first_name,last_name,email,hashedPassword,mobile,birth) => {
        try{const sql = `INSERT INTO users(first_name,last_name,email,password,mobile,birth) VALUES(?,?,?,?,?,?)`;
        const[result] = await pool.execute(sql, [first_name,last_name,email,hashedPassword,mobile,birth]);
        return result.insertId;}
        catch(error){
            console.error("Database Error(createUser)",error);
            throw error;
        }
    }
};
module.exports = User;