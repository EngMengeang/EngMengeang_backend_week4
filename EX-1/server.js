import express from 'express';
import logger from './middleware/logger.js';
import validates from './middleware/validate.js';
import routers from './routes/userRoutes.js';
const app = express();
app.use(express.json());



app.use(logger)


// Logger middleware
routers(app)



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
