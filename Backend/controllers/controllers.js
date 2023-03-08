const signUpSchema = require("../model_schemas/schemas");
const bcrypt = require("bcrypt");

const signUpController = async (req, res) => {
  try {
    // DESTRUCTURE REQUEST VAR
    const { userName, fullName, email, password } = req.body;

    // CHECKING IF USER EXISTS
    // const existUser = new Promise((resolve, reject) => {
    //   signUpSchema.findOne({ userName }, function (error, user) {
    //     if (error) {
    //       reject(new Error(error));
    //     }
    //     if (user) {
    //       reject({ Error: "User name already taken" });
    //     }
    //     resolve({ Message: "Promise1 resolved" });
    //   });
    // });

    // CHECK IF EMAIL EXISTS
    users.findOne({ userName: userName }, (err, user) => {
      if (err) {
        console.log(err);
        return;
      }
      if (user) {
        console.log("User found", user);
      }
      console.log("no user found");
    });
    // const existEmail = new Promise((resolve, reject) => {
    //   signUpSchema.findOne({ email }, function (error, user) {
    //     if (error) {
    //       reject(new Error(error));
    //     }
    //     if (user) {
    //       reject({ Error: "Please use another email account" });
    //     }
    //     resolve({ Message: "Promise2 resolved" });
    //   });
    // });

    // CHECK IF ALL PROMISES RESOLVED
    // Promise.all([existEmail, existUser])
    //   .then(() => {
    //     return res.status(500).json({ message: "All promises resolved" });
    //   })
    //   .catch((error) => {
    //     return res.status(200).json(error);
    //   });

    //HASH PASSWORD

    // const hashedPass = await bcrypt.hash(password, 10);

    // // SEND DATA TO DB

    // const savedUser = new signUpSchema({
    //   fullName: fullName,
    //   userName: userName,
    //   email: email,
    //   password: hashedPass,
    // });
    // savedUser
    //   .save()
    //   .then(() => {
    //     res.status(200).json({ message: "Sign up succcess log in " });
    //     return;
    //   })
    //   .catch((error) => {
    //     return res.status(501).json({
    //       err: error,
    //       message: "Unable to sign up try again later",
    //     });
    // });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = signUpController;
