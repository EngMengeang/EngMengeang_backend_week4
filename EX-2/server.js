import express from 'express';
import logger from './middlewares/logger.js';

import { journalistsRouter, articlesRouter, categoriesRouter } from './routes/userRoutes.js';
const app = express();
app.use(express.json());


// Logger middleware
journalistsRouter(app);
categoriesRouter(app);
articlesRouter(app);
app.use(logger)


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
