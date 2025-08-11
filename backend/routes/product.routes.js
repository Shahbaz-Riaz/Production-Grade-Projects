import express from 'express';

const productRouter = express.Router();

productRouter.get('/get-products', (req, res) => {
  res.send({ message: 'get all products' });
});

productRouter.get('/get-product/:id', (req, res) => {
  const {id} = req.params;
  res.send({ message: `get product with id ${id}` });
});

productRouter.post('/add-product', (req, res) => {
  const { name, price } = req.body;
  res.send({ message: `add product with name ${name} and price ${price}` });
});

productRouter.put('/update-product/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  res.send({ message: `update product with id ${id}, new name ${name} and new price ${price}` });
});

productRouter.delete('/delete-product/:id', (req, res) => {
  const { id } = req.params;
  res.send({ message: `delete product with id ${id}` });
});



export default productRouter;