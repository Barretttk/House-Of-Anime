const express = require("express");
const userRouter = express.Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

// /api/Users
userRouter.route("/") .get(getAllUsers) .post(createUser);

// /api/Users/:id
userRouter.route("/:id") .get(getOneUser) .put(updateUser) .delete(deleteUser);



module.exports = userRouter;
