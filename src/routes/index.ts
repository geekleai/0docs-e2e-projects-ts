import { Router } from 'express';
import customersRouter from './customers';
import leadsRouter from './leads';
import opportunitiesRouter from './opportunities';
// import contactsRouter from './contacts';
import dashboardRouter from './dashboard';

const router = Router();

// Include all routers
router.use('/customers', customersRouter);
router.use('/leads', leadsRouter);
router.use('/opportunities', opportunitiesRouter);
router.use('/dashboard', dashboardRouter);

export default router;