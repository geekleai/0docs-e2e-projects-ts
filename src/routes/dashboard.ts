import { Router } from 'express';

const router = Router();

router.get('/stats', (req, res) => {
    res.json({
        total_customers: 150,
        total_leads: 75,
        total_opportunities: 30,
        conversion_rate: "20%",
        last_updated: new Date().toISOString()
    });
});

router.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

export default router;