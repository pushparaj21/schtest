const mongoose = require("mongoose");

//we need to set the monthly fees of each class

const userSchema = mongoose.Schema({
  cls: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },

  Name: {
    type: String,
    required: true,
  },

  rollNo: {
    type: Number,
    required: true,
  },

  fees: {
    type: Number,
    required: true,
  },

  months: [],

  fatherName: {
    type: String,
    required: true,
  },

  motherName: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function () {
  console.log("the data of months--->", this.months);
  console.log("the data of Name--->", this.Name);
  console.log("the data of cls--->", this.cls);
  console.log("the data of rollNo--->", this.rollNo);
  console.log("the data of fathename--->", this.fatherName);
  console.log("the data of motherName--->", this.motherName);
  console.log("the data of year--->", this.year);
  console.log("the data of fees--->", this.fees);
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
