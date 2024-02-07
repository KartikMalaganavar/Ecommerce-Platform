const paymentServices = require("../services/payment.service");

const createPaymentLink = async (req, res) => {
  try {
    const paymentLink = await paymentServices.createPaymentLink(req.params.id);
    return res.status(200).send(paymentLink);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePaymentInformation = async (req, res) => {
  try {
    await paymentServices.updatePaymentInformation(req.query);
    return res
      .status(200)
      .send({ message: "payment information updated", status: "true" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports ={
    updatePaymentInformation,
    createPaymentLink
}
