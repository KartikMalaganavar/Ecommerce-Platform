const Razorpay = require("razorpay");

const apikey = process.env.RAZORPAY_KEY_ID;
const apiSecret = process.env.RAZORPAY_KEY_SECRET;

const razorpay = new Razorpay({
    key_id: apikey,
    key_secret: apiSecret
});

module.exports = razorpay;
