const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email }); // true if user exists.

        if (userExists) {
            return res.status(400).json({
                message: "Email already exists",
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        const token = jwt.sign(
            {
                // payload
                userId: user._id,
                name: user.name,
                role: user.role,
                message: "hi my name is amir :__:"
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            user: {
                name: user.name,
                email: user.email
            },
            token
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }); // true if user exists.

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
            })
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
            })
        }

        const token = jwt.sign(
            {
                // payload
                userId: user._id,
                name: user.name,
                role: user.role,
                message: "hi my name is amir :__:"
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            user: {
                name: user.name,
                email: user.email
            },
            token
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}

module.exports = {
    register,
    login,
}