const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:workoutId", userController.getOneUser);

router.post("/", userController.createNewUser);

router.patch("/:workoutId", userController.updateOneUser);

router.delete("/:workoutId", userController.deleteOneUser);

module.exports = router;