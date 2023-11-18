"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submitBtn";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import sendEmail from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className="scroll-mt-28"
    >
      <SectionHeading align="center">Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:lephuhaotech1124@gmail.com">
          lephuhaotech1124@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const res = await sendEmail(formData);

          if (res?.error) {
            toast.error(res?.error);
          } else {
            toast.success("Email sent successfully");
          }
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-none ring-2 ring-transparent focus:ring-emerald-400 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack outline-none ring-2 ring-transparent focus:ring-emerald-400 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
