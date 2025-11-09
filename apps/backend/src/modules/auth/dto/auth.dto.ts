import { User } from 'generated/prisma/client';

export type RegisterDTO = Omit<
  User,
  'id' | 'createdAt' | 'isDeleted' | 'updatedAt'
>;

export type UserResponseDTO = {
  token: string;
  userData: Omit<User, 'password'>;
};

export type LoginDTO = Pick<User, 'email' | 'password'>;
