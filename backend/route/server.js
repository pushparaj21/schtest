/** @format */

const express = require("express");
const userModel = require("../model/userModelSchema");

const dotenv = require("dotenv"); //we do not need to import dotenv every where once the dotenv.config(..) is used in root file as conn file is imported here so there we dont need to write this statement again , and its value can be accessed from anywhere through process.env.<nameOfVar>
const res = require("express/lib/response");
dotenv.config({ path: "/home/shivam/clg-fee/backend/config.env" });
// dotenv.config({ path: "../config.env" });

const app = express();
// port to listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening at port ${PORT}`));

try {
  require("../db/conn"); //this will automatically run the file
} catch (err) {
  console.log(err);
}

app.use(express.json());

// on home page
// app.get("/", (req, res) => {
//   res.send("<h1>hellow</h1>");
// });

// for edit,preview and delete student record
const userEntry = express.Router();
app.use("/userEntry", userEntry);
userEntry.route("/").get(reviewOfEntry).patch(updateEntry).delete(deleteEntry);

async function reviewOfEntry(req, res) {
  // console.log(typeof req.query);
  let queryMade = req.query;

  console.log(queryMade);

  let data = await userModel.find(queryMade).exec();

  console.log(data);
  res.json({
    obj: data,
    msg: "ho gya dekh lo",
  });
}

async function updateEntry(req, res) {
  const _id = req.body._id;
  const dataToUpdate = { months: req.body.months, fees: req.body.fees };
  console.log("body", req.body);

  if (req.body._id) {
    const obj = await userModel
      .findOneAndUpdate({ _id }, dataToUpdate, { new: true })
      .then((item) => {
        // console.log(item);
        res.status(200).json({
          msg: "data updated",
          updatedObj: item,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({
          msg: `Failed to update${err}`,
        });
      });
  } else {
    res.send("body is empty");
  }

  //
  // if (obj) {
  //   res.send("done");
  // } else {
  //   res.send("failed");
  // }
}
function deleteEntry(req, res) {}

// to create a new entry
const createNewEntry = express.Router();
app.use("/newentry", createNewEntry);
createNewEntry
  .route("/")
  // .get(entryForm)
  .post(makeEntry);

// function entryForm(req, res) {
//   console.log("hi jooo joooo to sign up page");
//   // res.sendFile(`${__dirname}/entryForm.html`);
//   res.sendFile("/entryForm.html", { root: __dirname });
// }

async function makeEntry(req, res) {
  // console.log(req.body);
  let { cls, year, Name, months, rollNo, fatherName, motherName, fees } =
    req.body;

  if (
    !cls ||
    !year ||
    !Name ||
    !rollNo ||
    !months ||
    !fatherName ||
    !motherName ||
    !fees
  ) {
    res.status(422).json({
      msg: "pls provide all the data",
    });
  }

  try {
    const userExist = await userModel.findOne({ cls, year, rollNo });

    if (userExist) {
      res.status(402).json({ msg: "bad credentails" });
    } else {
      let entryToBeMade = await userModel.create({
        cls,
        year,
        Name,
        rollNo,
        months,
        fatherName,
        motherName,
        fees,
      });
      if (entryToBeMade) {
        res.status(201).json({
          msg: "data saved",
          obj: entryToBeMade,
        });
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(422).json({ msg: `failed to upload data\n${err.name}` });
  }
}
