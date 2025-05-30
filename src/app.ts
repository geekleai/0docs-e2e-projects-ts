import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});