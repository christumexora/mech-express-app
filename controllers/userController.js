const getAllUsers = (req, res) => {
    res.status(200).json({
        'status': 'success',
        'message': "Get all users"
      })
  };
  
  const getOneUser = (req, res) => {
    res.status(200).json({
      'status': 'success',
      'message': "Get an existing user"
    })
  };
  
  const createNewUser = (req, res) => {
    res.status(200).json({
      'status': 'success',
      'message': "Create a new user"
    })  };
  
  const updateOneUser = (req, res) => {
    res.status(200).json({
      'status': 'success',
      'message': "Update an existing user"
    })  };
  
  const deleteOneUser = (req, res) => {
    res.status(200).json({
      'status': 'success',
      'message': "Delete an existing user"
    })  };
  
  module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
  };
