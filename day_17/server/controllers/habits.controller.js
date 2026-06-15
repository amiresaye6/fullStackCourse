const Habit = require("../models/Habits.model");

const getAllHabits = async (req, res) => {
    try {
        const userId = req.user.userId;
        const habits = await Habit.find({ userId });

        res.status(200).json({
            habits,
            totalHabits: habits.length,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
const createHabit = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { title, description, frequancy } = req.body;
        const habit = await Habit.create({
            title,
            description,
            frequancy,
            userId
        });

        res.status(201).json({
            habit
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
const updateHabit = async (req, res) => {
    try {
        const userId = req.user.userId;
        const habitId = req.params.id;

        const habit = await Habit.findOneAndUpdate(
            { _id: habitId, userId },
            {
                $push: {
                    completedDates: new Date(),
                },
            },
            { new: true }
        )

        if (!habit) {
            return res.status(400).json({
                message: "Habit not found"
            })
        }

        res.status(200).json({
            habit
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
const deleteHabit = async (req, res) => {  // to do by students.
    return res.status(200).json(
        {
            message: "delet not implmented yet.",
            userDetailsFromToken: req.user
        }
    )
}

module.exports = {
    getAllHabits,
    createHabit,
    updateHabit,
    deleteHabit
}