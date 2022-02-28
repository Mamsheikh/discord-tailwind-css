// /graphql/context.ts
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/prisma';

export type Context = {
  prisma: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
};
export async function createContext({ req, res }): Promise<Context> {
  return {
    prisma,
    req,
    res,
  };
}
