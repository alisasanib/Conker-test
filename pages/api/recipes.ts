// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { recipes } from '../../data/recipes';
type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const searchPath = req.query.search ?? '';
  const searchPathStr =
    typeof searchPath === 'string' ? searchPath : searchPath[0];

  let updatedRec = recipes;

  if (searchPathStr) {
    updatedRec = updatedRec.filter(
      (rec, id) =>
        rec.description.includes(searchPathStr.toLowerCase()) ||
        rec.description.includes(searchPathStr.toUpperCase()) ||
        rec.title.includes(searchPathStr.toLowerCase()) ||
        rec.title.includes(searchPathStr.toUpperCase())
    );
  }
  const incPath = req.query.inc ?? '';
  const incPathStr = typeof incPath === 'string' ? incPath : incPath[0];

  if (incPathStr) {
    for (let i = 0; i < updatedRec.length; i++) {
      if (
        updatedRec[i].tags.filter((element) =>
          incPathStr.toLowerCase().split(',').includes(element)
        ).length
      ) {
        continue;
      } else {
        updatedRec.splice(i, 1);
        i--;
      }
    }
  }

  const excPath = req.query.exc ?? '';
  const excPathStr = typeof excPath === 'string' ? excPath : excPath[0];

  if (excPathStr) {
    for (let i = 0; i < updatedRec.length; i++) {
      if (
        updatedRec[i].tags.filter((element) =>
          excPathStr.toLowerCase().split(',').includes(element)
        ).length
      ) {
        updatedRec.splice(i, 1);
        i--;
      }
    }
  }

  res.status(200).json(updatedRec);
}
