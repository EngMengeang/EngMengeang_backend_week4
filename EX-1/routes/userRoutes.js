import express from "express";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
 
} from "../controllers/userController.js";


const routers = (app) => {
  app.get("/users", getUsers);
  app.get("/users/:id", getUser);
  app.post("/users", createUser);
  app.put("/users/:id", updateUser);
  app.delete("/users/:id", deleteUser);
  
};

export default routers;
