import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2f3034a80c3be6",
    pass: "db1ab37c1b463c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <salut@feedget.com>',
      to: 'Kelvyn Lenis <kmartinslenis30@hotmail.com>',
      subject,
      html: body
  })
  }
}