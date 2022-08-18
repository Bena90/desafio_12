import User from '../models/UserSchema.js';


export const registerUser = (req, res) => {
    res.json({message: 'register'})

}

export const errorUser = (req, res) => {
    res.json({message: 'error de registration'})

}

export const authenticateUser = (req, res) => {
    if (req.user.name){
        req.session.user = req.user.username;
        req.session.admin = true;
    }
    console.log(req.session.user)
    console.log(req.session.admin)
    res.json({
        username: req.user.username,
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        admin: true,
    })
}


