import singUp_Model from "../models/singUp.models.js";

const singUpUser = async (req, resp) => {
  let userData = await singUp_Model(req.body);
  let result = await userData.save();
  if (result) {
    resp.send(result);
    resp.status(201).json({ message: "success" });
  } else {
    return resp.status(404).json({ message: "error occurred " });
  }
};

const singInUser = async (req, resp) => {
  try {
    const { name, password } = req.body;
    let userData = await singUp_Model.findOne(req.body);
    if (!userData) {
      resp.status(404).send("user not available");
    }
    resp.send(userData);

    if (userData.password === password) {
      console.log({ message: "sign in successful " });
    } else {
      console.log({ message: "wrong password or username" });
    }
  } catch (error) {
    console.log("error occurred at signing a user ~~~>", error);
    resp.json({ message: "error occurred at signing " });
    process.exit(1);
  }
};

export { singInUser, singUpUser };
