import type { NextApiRequest, NextApiResponse } from 'next'

type QuestionsData = {
  questions: string[],
  message?: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionsData>
) {
  if (req.method === "POST") {
    const { text } = req.body;
    
    const questions = ["1", "2"];
    res.status(200).json({ questions });
  } else {
    res.status(404).json({
      questions: [],
      message: "Not found"
    });
  }
}
