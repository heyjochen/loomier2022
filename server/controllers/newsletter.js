// @desc Signup for newsletter
// @route POST /newsletter
// access

const signupNewsletter = async (req, res) => {
  if (!req.body.email) {
    res.status(400);
    throw new Error('Please add email');
  }
  const signup = await axios.post('/newsletter');
  return signup.data;
};

module.exports = { signupNewsletter };
