const userSchema = require('../model/user');
var jwt = require('jsonwebtoken');

const AddUser = async(req, res) => {
    const creatorData = req.body;
    try {
        const user = await userSchema.create(creatorData);
        const {email} = user;
        const token = jwt.sign({email}, 'secret', { expiresIn: '1h' });
        return res.status(201).json({
            data: {
                token: token,
                user: user,
            },
            message: 'Profile successfully created.',
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
  };


const Login = async(req, res) => {
  const { email, password } = req.body;
  try {
    const User = await userSchema.findOne({email});
    const isCorrectPassword = User?.password;
    if (!User) {
        return res.status(404).send('User not found.');
    }else{
        if(password == isCorrectPassword) {
            const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });
            return res.status(200).send({
                message: 'login successfully',
                data: User,
                token: token,
            });
        } else{
            return res.status(403).send('Incorrect password.');
        }
    }
  } catch (error) {
        return res.status(500).send(error.message);
  }

};
module.exports = {Login, AddUser};