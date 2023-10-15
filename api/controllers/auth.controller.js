import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

// sign up api route
export const signup = async( req, res, next ) => {
    const { username, email, password } = req.body;// Sending a response message
    const hashPass = bcryptjs.hashSync( password, 10 );
    const newUser = new User({username, email, password:hashPass});
   try {
     await newUser.save();
    res.status(200).json({message: "Succussfully Registered"})
   } catch (error) {
       next (error);
   }
};


// sign in api route
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const validUser = await User.findOne({ email: email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }

        // Check if the provided password matches the user's hashed password
        const validPassword = await bcryptjs.compare(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Wrong Credentials!'));
        }

        // Generate a JSON Web Token (JWT)
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        // Omit the password field from the response and set the JWT as a cookie
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

// Google auth

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashPassword = await bcryptjs.hash(generatedPassword, 10); // Use await for hash
      const newUser = new User({
        username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};