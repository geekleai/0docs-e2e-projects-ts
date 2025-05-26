import { Router, Request, Response } from 'express';
import { CustomerService } from '../services/customerService';
import { CustomerSchema } from '../schemas/customer';

const router = Router();
const customerService = new CustomerService();

router.post('/', async (req: Request, res: Response) => {
    try {
        const result = CustomerSchema.safeParse(req.body);
        if (!result.success) throw result.error;
        const customerData = result.data;
        const newCustomer = await customerService.createCustomer(customerData);
        res.status(201).json(newCustomer);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const customer = await customerService.getCustomer(Number(req.params.id));
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
        try {
            const result = CustomerSchema.safeParse(req.body);
            if (!result.success) throw result.error;
            const customerData = result.data;
            const updatedCustomer = await customerService.updateCustomer(Number(req.params.id), customerData);
            if (!updatedCustomer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
            res.status(200).json(updatedCustomer);
        }
        
     catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const success = await customerService.deleteCustomer(Number(req.params.id));
        if (!success) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(204).send();
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(400).json({ message: errorMessage });    }
});

export default router;