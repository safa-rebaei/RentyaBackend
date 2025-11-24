const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Veuillez entrer une adresse email valide",
    ],
  },
  motdePasse: {
     type: String,
    required: true,
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
    ],
  },
  role: { type: String, enum: ["locataire", "proprietaire", "admin"] },
  image_U: { type: String, required: false,default:"client.png" },
   isActive: { type: Boolean, default: false } 
},


{timestamps:true});
userSchema.pre('save',async function(next) {
 try{
   const salt =await bcrypt.genSalt()
   const User=this
   User.motdePasse=await bcrypt.hash(User.motdePasse,salt)
   User.isActive=false 
   next()
 }catch (error){

 }

  
})


const User= mongoose.model("User",userSchema)
module.exports = User


