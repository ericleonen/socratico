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
    
    const questions = [
      "This is a sample question.",
      "This is, get this, yet another surprising sample question. Can you answer it?",
      "Here's a question in a different format.",
      "Oh my gosh! Yet another question appears.",
      "This is a sample question.",
      "This is, get this, yet another surprising sample question. Can you answer it?",
      "Here's a question in a different format.",
      "Oh my gosh! Yet another question appears.",
      "This is a sample question.",
      "This is, get this, yet another surprising sample question. Can you answer it?",
      "Here's a question in a different format.",
      "Oh my gosh! Yet another question appears.",
      "This is a sample question.",
      "This is, get this, yet another surprising sample question. Can you answer it?",
      "Here's a question in a different format.",
      "Oh my gosh! Yet another question appears.",
      "This is a sample question.",
      "This is, get this, yet another surprising sample question. Can you answer it?",
      "Here's a question in a different format.",
      "Oh my gosh! Yet another question appears."
    ];

    setTimeout(() => {
      res.status(200).json({ questions });
    }, 2000);
  } else {
    res.status(404).json({
      questions: [],
      message: "Not found"
    });
  }
}
