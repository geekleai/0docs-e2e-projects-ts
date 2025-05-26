import { Contact } from '../models/contact';
import { v4 as uuidv4 } from 'uuid';

export class ContactService {
    private contactsDb: Map<string, Contact> = new Map();

    public getAllContacts(): Contact[] {
        return Array.from(this.contactsDb.values());
    }

    public getContact(contactId: string): Contact | null {
        return this.contactsDb.get(contactId) || null;
    }

    public createContact(contact: Omit<Contact, 'id'>): Contact {
        const newContact: Contact = { id: uuidv4(), ...contact };
        this.contactsDb.set(newContact.id, newContact);
        return newContact;
    }

    public updateContact(contactId: string, contact: Partial<Contact>): Contact | null {
        const existingContact = this.contactsDb.get(contactId);
        if (!existingContact) {
            return null;
        }
        const updatedContact = { ...existingContact, ...contact };
        this.contactsDb.set(contactId, updatedContact);
        return updatedContact;
    }

    public deleteContact(contactId: string): boolean {
        return this.contactsDb.delete(contactId);
    }
}