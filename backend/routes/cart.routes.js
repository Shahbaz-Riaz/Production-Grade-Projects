import express from 'express';

const cartRouter = express.Router();

cartRouter.get('/view-cart', (req, res) => {
  res.send({ message: 'view cart items' });
});

cartRouter.post('/add-to-cart', (req, res) => {
  const { productId, quantity } = req.body;
  res.send({ message: `add product with id ${productId} and quantity ${quantity} to cart` });
});

cartRouter.put('/update-cart/:id', (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  res.send({ message: `update cart item with id ${id}, new quantity ${quantity}` });
});

cartRouter.delete('/remove-from-cart/:id', (req, res) => {
  const { id } = req.params;
  res.send({ message: `remove cart item with id ${id}` });
}); 




export default cartRouter;