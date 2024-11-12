
import { IContact } from './contact.interface';
import { Contact } from './contact.model';
export const createContactToDb = async (payload: IContact): Promise<IContact> => {
    const contact = await new Contact(payload)
    await contact.save()
    return contact
}