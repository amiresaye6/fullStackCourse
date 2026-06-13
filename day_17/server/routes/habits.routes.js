const router = require("express").Router();
const habitsController = require("../controllers/habits.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, habitsController.getAllHabits);

module.exports = router;