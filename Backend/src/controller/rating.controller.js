const ratingService = require("../services/rating.service.js");

const createRating = async (res, req) => {
  const user = req.user;
  try {
    const rating = await reviewService.createRating(req.body, user);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status;
  }
};

const getAllRatings = async (res, req) => {
  const productId = req.params.productId;
//   const user = req.user;
  try {
    const ratings = await reviewService.getAllRatings(productId);
    return res.status(201).send(ratings);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports ={
    createRating,
    getAllRatings
}