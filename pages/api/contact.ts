import type { NextApiRequest, NextApiResponse } from "next";
// @types
import { ResponseData } from "../../@types/contact";

function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "POST") {
    res.status(200).json({
      code: 200,
      message: "Ok",
      data: { ...req.body },
    });
  }
}

export default handler;
