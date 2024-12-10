import nodemailer from "nodemailer";
const USER = process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    // logger: true,
});

const sendTwoFactorEmail = async (email, token) => {
    const ans = await transporter.sendMail({
        from: USER,
        to: email,
        subject: "2FA Code",
        text: "Hello world?",
        html: `<p>Your 2FA Code: ${token}</p>`,
    });  
};

const sendPasswordResetEmail = async (email, token) => {
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${token}`;

    await transporter.sendMail({
        from: USER,
        to: email, // list of receivers
        subject: "Reset your password", // Subject line
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`, // html body
    });  
};

const sendVerificationEmail = async (email, token) => {
    const ans = await transporter.sendMail({
        from: USER,
        to: email,
        subject: "Confirm your email",
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #4CAF50;">Welcome!</h2>
                <p style="font-size: 16px;">Thank you for joining our service.</p>
                <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
                    Please verify your email address to get started.
                </p>
                <a href="${confirmLink}">Click here</a>
            </div>
        `,
    });
};

export {sendVerificationEmail};