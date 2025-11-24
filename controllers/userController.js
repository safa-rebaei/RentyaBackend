const userModel = require("../models/userModel");
//exportation
module.exports.getAllUsers = async (req, res) => {
  try {
    const UsersList = await userModel.find();
res.status(200).json({ userList: UsersList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const User = await userModel.findById(id);
    res.status(200).json({ User });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.addClient = async (req, res) => {
  try {
    //logique
    const { firstName, lastName, email, password, age } = req.body;
    const role = "locataire";

   const user = new userModel({
  nom,
  prenom,
  email,
  motdePasse: motdePasse, // stocke motdePasse dans password
  adresse,
  ville,
  role,
});
    const addedUser = await user.save();
    res.status(200).json({ addedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.addClientV2 = async (req, res) => {
  try {
    //logique
    const userData = req.body;
    userData.role = "locataire";

    const user = new userModel(userData);
    const addedUser = await user.save();
    res.status(200).json({ addedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.addClientWithImage = async (req, res) => {
  try {
    //logique
    const userData = req.body; //req.body tjib data lkol
    userData.role = "locataire";

    if (req.file) {
      userData.image_U = req.file.filename;
    }

    const user = new userModel(userData);
    const addedUser = await user.save();
    res.status(200).json({ addedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



