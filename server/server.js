const mongoose = require('mongoose');
const express = require('express');
const cors=require("cors")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Server is running and MongoDB is connected.');
});

const users = require("./models/user")
const {userModel} = require("./models/user")


const generateHashedPassword = async(password)=>{
  const salt = await bcryptjs.genSalt(10) //assume the cost of salt
  return bcryptjs.hash(password,salt)  
}

app.post("/signup",async(req,res)=>{
  let input = req.body
  let hashedPassword = await generateHashedPassword(input.password)
  input.password = hashedPassword
  userModel.find({"email":input.email}).then(
      (response)=>{
          if (response.length>0) {
              res.json({"status":"email already exist"})
          } else {
              let user = new users.userModel(input)
              console.log(user)
              user.save()
              res.json({"status":"success"})
          }
      }
  ).catch(
      (error)=>{
          res.json(error)
      }
  )
})

app.post("/signin",(req,res)=>{
  let input = req.body
  userModel.find({"email":input.email}).then(
      (response)=>{
          if (response.length>0) {
              let dbpassword = response[0].password
              bcryptjs.compare(input.password,dbpassword,(error,isMatch)=>{
                  if (isMatch) {
                      jwt.sign({email:input.email},"blog-challenge-app",{expiresIn:"1d"},
                          (error,token)=>{
                          if (error) {
                              res.json({"status":"unable to create token"})
                          } else {
                              res.json({"status":"success","userId":response[0]._id,"token":token})
                          }
                      })
                  } else {
                      res.json({"status":"Invalid credentials"})
                  }
              })
          } else {
              res.json({"status":"user not found"})
          }
      }
  ).catch(
      (error)=>{
          res.json(error)
      }
  )
})



// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
