import express from 'express';

const categoryRouter = express.Router();

categoryRouter.get('/get-categories', (req, res) => {
  res.send({ message: 'get all categories' });
});

categoryRouter.post('/add-category', (req, res) => {
  const { name } = req.body;
  res.send({ message: `add category with name ${name}` });
});

categoryRouter.put('/update-category/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.send({ message: `update category with id ${id}, new name ${name}` });
});

categoryRouter.delete('/delete-category/:id', (req, res) => {
  const { id } = req.params;
  res.send({ message: `delete category with id ${id}` });
});



export default categoryRouter;