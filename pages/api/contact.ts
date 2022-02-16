// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import dotenv from "dotenv"

type ResData = {
	message: string
}

type ReqData = {
	name: string
	email: string
	enquiry: string
	message: string,
	school: string
}

dotenv.config()


const transporter = nodemailer.createTransport({
	host: "mail.privateemail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
})


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResData>
) {

	let msg = undefined
	if (req.method == "POST") {
		console.log(req.body)

		const form = req.body as ReqData

		try {

			const info = await transporter.sendMail({
				from: `"votur-website" <contact@votur.app>`,
				to: "contact@votur.app",
				subject: `votur enquiry`,
				html: `From: ${form.name}
		<br />
		Request Type: ${form.enquiry}
		<br />
		email: ${form.email}
		<br />
		School: ${form.school}
		<br />
		message: ${form.message}
		`
			})
			msg = info
		} catch (e) {
			console.log(e)
		}

		res.status(200).json({ message: `Thank you for your submission: ${msg?.messageId}` })

	}
}
