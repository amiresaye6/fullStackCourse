const getAllHabits = async (req, res) => {
    return res.status(200).json(
        {
            message: "request authorized and completed successfully.",
            userDetailsFromToken: req.user
        }
    )
}

module.exports = {
    getAllHabits
}