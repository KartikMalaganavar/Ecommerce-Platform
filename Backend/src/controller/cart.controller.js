const cartService = require("../services/cart.service.js");
const cartItemService = require("../services/cartItem.services.js")

const findUserCart = async (req, res) => {
  const user = await req.user;
  try {
    const cart = await cartService.findUserCart(user._id);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  const user = await req.user;
  try {
    const cartItem = await cartService.addCartItem(user._id, req.body);
    return res.status(200).send(cartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const removeCartItemsBasedOnOrderStatus = async (req, res) => {
  const user = await req.user;
  try {
    const cartItems = await cartService.findUserCart(user._id);
    for (const cartItem of cartItems) {
      const order = await cartItemService.findCartItemById(cartItem.orderId);
      if (order && order.orderStatus === "PLACED") {
        await cartItemService.removeCartItem(user._id, cartItem._id);
      }
    }
    return res.status(200).send({ message: "Cart items processed based on order status" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  addItemToCart,
  removeCartItemsBasedOnOrderStatus,
  findUserCart,
};
