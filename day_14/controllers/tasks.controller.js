const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            message: "task created successsfuly",
            task
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(201).json({
            message: "retreaved tasks correctly",
            tasks,
            numberOfTAsksk: tasks.length
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    createTask,
    getAllTasks
}