// GET /users - List all users
import { categories } from "../models/data.js";


export const getCategories = ((req, res) => {
    res.json(categories);
});

// GET /categories/:id - Get one user
export const getCategory = ((req, res) => {
    const categorieId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categorieId);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
});

// POST /categories - Create new user
export const createCategory = ((req, res) => {
    const { name} = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name required' });
    }

    const newCategory = {
        id: categories.length + 1,
        name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

// PUT /categories/:id - Update user
export const updateCategory = ((req, res) => {
    const categoryID = parseInt(req.params.id);
    const { name } = req.body;

    const category = categories.find(c => c.id === categoryID);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    if (name) category.name = name;
    res.json(category);
});

// DELETE /categories/:id - Delete user
export const deleteCategory = ((req, res) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex(u => u.id === categoryId);
    if (index === -1) return res.status(404).json({ error: 'Category not found' });

    categories.splice(index, 1);
    res.status(204).send();
});