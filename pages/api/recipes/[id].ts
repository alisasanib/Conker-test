// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { recipes } from '../../../data/recipes';
import { RecipeProp } from '../../../common/types';
type Data = {
  // name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id: queryId } = req.query;
  const selectedRecipe: RecipeProp = [...recipes].filter(
    ({ id }: { id: number }) => id === Number(queryId)
  )[0];

  res.status(200).json(selectedRecipe);
}
