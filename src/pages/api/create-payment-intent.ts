import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
        typescript: true,
        apiVersion:"2023-10-16"
});

