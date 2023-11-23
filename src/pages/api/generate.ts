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
      "What is the significance of the phoenix in the context of the conversation?",
      "According to Granger, what distinguishes humans from the phoenix in their repetitive actions?",
      "Why does Granger emphasize the importance of knowing the \"damn silly things\" humans have done for a thousand years?",
      "How does the phoenix analogy relate to the cycle of human behavior as described by Granger?",
      "Why does Granger believe that knowing the mistakes of the past is crucial for humanity's future?",
      "What does Granger mean when he says, \"You're not important. You're not anything\"?",
      "How does Granger suggest that the knowledge of past mistakes can benefit future generations?",
      "According to Granger, what did humans do with the knowledge they gained from books in the past?",
      "What is the purpose of Granger's plan to build a mirror factory and focus on mirrors for the next year?",
      "How does Granger envision using the knowledge accumulated by humanity to shape the future, as mentioned in the text?"
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
