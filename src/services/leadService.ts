import { Lead } from '../schemas/lead';

export class LeadService {
    private leadsDb: Map<number, Lead> = new Map();
    private currentId: number = 1;

    getAllLeads(): Lead[] {
        return Array.from(this.leadsDb.values());
    }

    getLead(leadId: number): Lead | null {
        return this.leadsDb.get(leadId) || null;
    }

    createLead(lead: Lead): Lead {
        lead.id = this.currentId++;
        this.leadsDb.set(lead.id, lead);
        return lead;
    }

    updateLead(leadId: number, lead: Lead): Lead | null {
        if (!this.leadsDb.has(leadId)) {
            return null;
        }
        lead.id = leadId;
        this.leadsDb.set(leadId, lead);
        return lead;
    }

    deleteLead(leadId: number): boolean {
        return this.leadsDb.delete(leadId);
    }
}

