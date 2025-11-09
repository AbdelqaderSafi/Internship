import { Contact } from 'generated/prisma';

export type ContactDTO = Omit<
  Contact,
  'id' | 'createdAt' | 'status' | 'updatedAt'
>;
