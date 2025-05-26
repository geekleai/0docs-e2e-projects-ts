import { Opportunity } from '../schemas/opportunity';
import { v4 as uuidv4 } from 'uuid';


interface IOpportunity extends Omit<Opportunity, 'id'> {
    id: string;
}

export class OpportunityService {
    private opportunities: Map<string, IOpportunity> = new Map();

    getAllOpportunities(): IOpportunity[] {
        return Array.from(this.opportunities.values());
    }

    getOpportunity(id: string): IOpportunity | undefined {
        return this.opportunities.get(id);
    }

    createOpportunity(opportunity: Opportunity): IOpportunity {
        const id = uuidv4();
        const o: IOpportunity = {
            ...opportunity,
            id,
        };

        this.opportunities.set(id, o);
        return o;
    }

    updateOpportunity(id: string, opportunity: Opportunity): Opportunity | undefined {
        if (!this.opportunities.has(id)) {
            return undefined;
        }
        const o: IOpportunity = {
            ...opportunity,
            id,
        };
        this.opportunities.set(id, o);
        return opportunity;
    }

    deleteOpportunity(id: string): boolean {
        return this.opportunities.delete(id);
    }
}