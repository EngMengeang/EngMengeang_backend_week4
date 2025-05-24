// GET /journalists - List all journalists
import { journalists } from "../models/data.js";

export const getJournalists = (req, res) => {
    res.json(journalists);
};

// GET /journalists/:id - Get one journalist
export const getJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

// POST /journalists - Create a new journalist
export const createJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newJournalist = {
        id: journalists.length ? journalists[journalists.length - 1].id + 1 : 1,
        name,
        email
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

// PUT /journalists/:id - Update a journalist
export const updateJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);
};

// DELETE /journalists/:id - Delete a journalist
export const deleteJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === journalistId);
    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalists.splice(index, 1);
    res.status(204).send();
};
