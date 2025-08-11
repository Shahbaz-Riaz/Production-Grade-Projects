import express from 'express';

const orderRouter = express.Router();

orderRouter.get('/view-orders', (req, res) => {
  res.send({ message: 'view all orders' });
});

orderRouter.get('/view-order/:id', (req, res) => {
  const { id } = req.params;
  res.send({ message: `view order with id ${id}` });
} );

orderRouter.post('/place-order', (req, res) => {
  const { items, totalAmount } = req.body;
  res.send({ message: `place order with items ${items} and total amount ${totalAmount}` });
});

orderRouter.get('/user-orders', (req, res) => {
  res.send({ message: 'view user orders' });
});

orderRouter.put('/update-order-status/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  res.send({ message: `update order with id ${id} to status ${status}` });
}); 




export default orderRouter;