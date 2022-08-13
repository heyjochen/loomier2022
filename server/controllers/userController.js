// @desc Get all projects
// @POST /api/users
// access PRIVATE
const registerUser = (req, res) => {
  res.send('Register user');
};

// @desc Auth a user
// @POST /api/users/login
// access PUBLIC
const loginUser = (req, res) => {
  res.json({ message: 'Auth User' });
};

// @desc Register new user
// @POST /api/users
// access PUBLIC
const getMe = (req, res) => {
  res.send('register user');
};
module.exports = { registerUser, loginUser, getMe };
