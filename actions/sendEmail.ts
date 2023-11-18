"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  const sender = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(sender);

  if (!validateString(sender) || !validateString(message)) {
    return {
      error: "Invalid data format!",
    };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "eddie1124.work@gmail.com",
      reply_to: sender as string,
      subject: "[PORTFOLIO] Contact Form Message",
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: sender as string,
      }),
    });
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export default sendEmail;
