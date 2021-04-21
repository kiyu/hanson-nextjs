import { NextApiRequest, NextApiResponse } from 'next';
import data from './data.json';

const defaultLimit = 10;
const defaultOffset = 0;

interface QueryParams {
  limit?: string;
  offset?: string;
}

const makeLimit = (limitParam: string): number => {
  if (!limitParam) {
    return defaultLimit;
  }

  const parsed = parseInt(limitParam, 10);
  return isNaN(parsed) ? defaultLimit : parsed;
};

const makeOffset = (offsetParam: string): number => {
  if (!offsetParam) {
    return defaultOffset;
  }

  const parsed = parseInt(offsetParam, 10);
  return isNaN(parsed) ? defaultOffset : parsed;
};

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const query = req.query as QueryParams;

  const limit = makeLimit(query.limit);
  const offset = makeOffset(query.offset);

  res.status(200).json({
    total: data.total,
    items: data.items.slice(offset, offset + limit),
  });
};
