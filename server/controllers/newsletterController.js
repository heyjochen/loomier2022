const axios = require('axios');

// @desc Signup for newsletter
// @route POST /api/newsletter
// access
const signup = async (req, res) => {
  const listId = process.env.LIST_ID;
  const apiKey = process.env.MAILCHIMP_API_KEY;

  const { email_address } = req.body;

  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Please provide an email address' }),
    };
  }

  try {
    const payload = {
      email_address: email_address,
      status: 'subscribed',
    };
    const { data } = await axios.post(
      `https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
      payload,
      {
        headers: {
          Authorization: `Basic ${apiKey}`,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

module.exports = { signup };
