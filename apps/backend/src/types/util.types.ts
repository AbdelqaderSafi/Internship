import { Prisma } from 'generated/prisma';

export type PaginationQueryType = {
  page?: number;
  limit?: number;
};

export type PaginationResponseMetaDataType = {
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type PaginationResponseType<T> = {
  data: T[];
} & PaginationResponseMetaDataType;

export type TransactionClient = Prisma.TransactionClient;
