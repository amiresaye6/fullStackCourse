const router = require("express").Router();
const habitsController = require("../controllers/habits.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// user authMiddlewar for all routs "global use."

router.use(authMiddleware);

// get all habits by user.
router.get("/", habitsController.getAllHabits);
// create habit
router.post("/", habitsController.createHabit);
// update habit
router.put("/:id", habitsController.updateHabit);
// delete habit
router.delete("/:id", habitsController.deleteHabit);

module.exports = router;