import express from "express";
import { getArticle, getArticles, createArticle, updateArticle, deleteArticle } from "../controllers/articleController.js";
import { getCategory, getCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoriesController.js";
import { getJournalist, getJournalists, createJournalist, updateJournalist, deleteJournalist } from "../controllers/journalistsController.js";
const journalistsRouter = (app) => {
  app.get("/journalists", getJournalists);
  app.get("/journalists/:id", getJournalist);
  app.post("/journalists", createJournalist);
  app.put("/journalists/:id", updateJournalist);
  app.delete("/journalists/:id", deleteJournalist);
};

const categoriesRouter = (app) => {
  app.get("/categories", getCategories);
  app.get("/categories/:id", getCategory);
  app.post("/categories", createCategory);
  app.put("/categories/:id", updateCategory);
  app.delete("/categories/:id", deleteCategory);
};

const articlesRouter = (app) => {
  app.get("/articles", getArticles);
  app.get("/articles/:id", getArticle);
  app.post("/articles", createArticle);
  app.put("/articles/:id", updateArticle);
  app.delete("/articles/:id", deleteArticle);
};

export {
  journalistsRouter,
  articlesRouter,
  categoriesRouter
}
