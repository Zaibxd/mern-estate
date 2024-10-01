import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //password and salt value
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //User model we created in models folder
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User Created Sucessfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //comparing email with email in db
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!")); // errorHandler(status code, message)

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credentials"));

    //jwt token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    //Exluding password of user from returning with username and email
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    return next(error);
  }
};
