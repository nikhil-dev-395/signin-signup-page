import singUp_Model from "../models/singUp.models.js";

const singUpUser = async (req, resp) => {
  let userData = await singUp_Model(req.body);
  await userData
    .save()
    .then((data) => {
      resp.status(200).send(data);
      console.log("sign up successful");
    })
    .catch((error) => {
      console.log("error occurred at sign up ~~~~~", error);
    });
};

const singInUser = async (req, resp) => {
  try {
    let userData = await singUp_Model.findOne(req.body);
    if (!userData) {
      resp.status(404).send("user not available");
    }
    resp.send(userData);
  } catch (error) {
    console.log("error occurred at signing a user ~~~>", error.message);
    resp.json({ message: "error occurred at signing " });
    process.exit(1);
  }
};

export { singInUser, singUpUser };
