import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { calculatePrices } from "../../../utils/math";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    typescript: true,
    apiVersion:"2023-10-16"
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { text, numQuestions } = req.body;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: calculatePrices(text, numQuestions)[2],
		currency: "usd",
	});

	res.send({
		clientSecret: paymentIntent.client_secret
	});
}