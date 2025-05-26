import { Router, Request, Response } from 'express';
import { Lead } from '../models/lead';
import { LeadService } from '../services/leadService';
import { LeadSchema } from '../schemas/lead';

const router = Router();
const leadService = new LeadService();

router.get('/', async (req: Request, res: Response) => {
    const leads = await leadService.getAllLeads();
    res.json(leads);
});

router.get('/:id', async (req: Request, res: Response) => {
    const leadId = parseInt(req.params.id);
    const lead = await leadService.getLead(leadId);
    if (!lead) {
        return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
});

router.post('/', async (req: Request, res: Response) => {
    const result = LeadSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: result.error.issues[0].message });
    }
    const newLead = await leadService.createLead(result.data);
    res.status(201).json(newLead);
});

router.put('/:id', async (req: Request, res: Response) => {
    const leadId = parseInt(req.params.id);
    const result = LeadSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: result.error.issues[0].message });
    }
    const updatedLead = await leadService.updateLead(leadId, result.data);
    if (!updatedLead) {
        return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(updatedLead);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const leadId = parseInt(req.params.id);
    const success = await leadService.deleteLead(leadId);
    if (!success) {
        return res.status(404).json({ message: 'Lead not found' });
    }
    res.status(204).send();
});

export default router;