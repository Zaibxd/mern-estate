import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //password and salt value
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //User model we created in models folder
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User Created Sucessfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
