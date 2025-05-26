import { Router, Request, Response } from 'express';
import { OpportunityService } from '../services/opportunityService';
import { OpportunitySchema, Opportunity } from '../schemas/opportunity';

const router = Router();
const opportunityService = new OpportunityService();

router.post('/', async (req: Request, res: Response) => {
    try {
        const opportunityData = OpportunitySchema.parse(req.body);
        const opportunity = await opportunityService.createOpportunity(opportunityData);
        res.status(201).json(opportunity);
    } catch (error) {
        res.status(400).json({ message: "error" });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const opportunities = await opportunityService.getAllOpportunities();
        res.status(200).json(opportunities);
    } catch (error) {
        res.status(400).json({ message: "error" });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const opportunity = await opportunityService.getOpportunity(String(req.params.id));
        res.status(200).json(opportunity);
    } catch (error) {
        res.status(404).json({ message: 'Opportunity not found' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const opportunityData = OpportunitySchema.parse(req.body);
        const updatedOpportunity = await opportunityService.updateOpportunity(String(req.params.id), opportunityData);
        res.status(200).json(updatedOpportunity);
    } catch (error) {
        res.status(404).json({ message: 'Opportunity not found' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await opportunityService.deleteOpportunity(String(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: 'Opportunity not found' });
    }
});

export default router;