const mongoose = require('mongoose');

const animeusersSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Must be at least 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Must be at least 3 characters"],
    },
    email: {
      type: String,
      required: [true, "E-mail is required"],
      minLength: [5, "Must be at least 5 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Must be at least 8 characters"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "Password is required"],
    },
    isCheck: {
      type: Boolean,
      required: [true, " is required"],
    },
  },
  { timestamps: true }
);


const animeusers = mongoose.model("animeuser", animeusersSchema);
module.exports = animeusers;