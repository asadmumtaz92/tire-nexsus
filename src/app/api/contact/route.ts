import { NextResponse } from "next/server"
export const dynamic = "force-dynamic"
export const fetchCache = 'force-no-store'
const { EMAIL_FROM, PASSWORD, EMAIL_TO, EMAIL_BCC, EMAIL_CC, } = process.env
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {

    try {
        const { name, email, message, } = await request.json()
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields must be filled in.' }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            host: 'mail.byteshifted.net',
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_FROM,
                pass: PASSWORD,
            },
        })

        // Read the HTML template
        const templatePath = path.resolve('src/templates/contact.html');
        let emailTemplate = fs.readFileSync(templatePath, 'utf8');
        // Replace placeholders with actual data
        emailTemplate = emailTemplate.replace('{{name}}', name);
        emailTemplate = emailTemplate.replace('{{email}}', email);
        emailTemplate = emailTemplate.replace('{{message}}', message);
        const mailOptions = {
            from: EMAIL_FROM,
            to: EMAIL_TO,
            bcc: EMAIL_BCC,
            cc: EMAIL_CC,
            subject: 'New Lead from Tire Nexsu Contact Form',
            html: emailTemplate,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Contact form submitted successfully!', status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to submit contact form.' + error }, { status: 500 });
    }
}
