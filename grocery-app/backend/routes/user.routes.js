import express from "express";

const userRouter = express.Router();

userRouter.get("/profile", (req, res) => {
  res.send({ message: "view user profile" });
});

userRouter.put("/update-profile", (req, res) => {
  const { name, email } = req.body;
  res.send({
    message: `update user profile with name ${name} and email ${email}`,
  });
});

userRouter.get("/admin/users", (req, res) => res.send("all users"));
userRouter.delete("/admin/user/:id", (req, res) => res.send("delete user"));


export default userRouter;
