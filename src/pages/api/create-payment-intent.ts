import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        typescript: true,
        apiVersion:"2023-10-16"
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { data } = req.body;
        const { amount } = data;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: Number(amount) * 100,
                currency: "USD"
            });

            res.status(200).json(paymentIntent.client_secret);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}