const { getAll, createUser, getUser, removeUser, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
		.get(getAll)
        .post(createUser)

userRouter.route("/users/:id")
        .get(getUser)
        .delete(removeUser)
        .put(updateUser)

module.exports = userRouter;