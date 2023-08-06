import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from "../controller/categoryController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const route = express.Router();

// Routes

// Create category
// route.post("/create-category", requireSignIn, isAdmin, createCategory);
route.post("/create-category",  createCategory);

// update category
// route.put("/update-category/:id", requireSignIn, isAdmin, updateCategory);
route.put("/update-category/:id",  updateCategory);

// All Category
route.get("/get-category", getAllCategory);

// single category
route.get("/single-category/:slug", getSingleCategory);

// delete category
// route.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory);
route.delete("/delete-category/:id",  deleteCategory);
export default route;
