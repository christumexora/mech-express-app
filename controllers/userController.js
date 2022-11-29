const User = require('../services/userService')
const CryptoJS = require("crypto-js");

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
  
    res.status(200).json({
        'status': 'success',
        'results': Users.length,
        'message': "Get all users",
        'data': {
          user: Users
        }
      })
    } catch (error) {
      res.status(404).json({
        status: 'failure',
        message: error
      })
    }
  };
  
  exports.getOneUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
  
      res.status(201).json({
        status: 'success',
        message: 'We got a user',
        data: {
          user: user
        }
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
      })
    }
    }
  
  exports.createNewUser = async (req, res) => {
    try {

      if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt('backend-dev', process.env.PASS_SEC).toString()

      }

    const newUser = await User.create(req.body)

     res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      },
      message: 'user created'
     })

    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error
      })
    }
    }
  
    exports.updateOneUser = async (req, res) => {
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true
        })
        
    
        res.status(201).json({
          status: 'success',
          message: 'We updated a user',
          data: {
            user: user
          }
        })
      } catch (error) {
        res.status(404).json({
          status: 'failed',
          message: error
        })
      }
       
      }
    
    exports.deleteOneUser = async (req, res) => {
      try {
        const user = await User.findByIdAndDelete(req.params.id)
    
        res.status(201).json({
          status: 'success',
          message: 'We deleted a user',
          data: {
            user: user
          }
        })
      } catch (error) {
        res.status(404).json({
          status: 'failed',
          message: error
        })
      }
    
      }