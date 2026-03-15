"use client";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Ankit",
          from_email: form.email,
          reply_to: form.email,
          phone: form.phone,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as a possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 
    bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/contact.png"
          width={600}
          height={500}
          alt="Contact"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-8 rounded-lg shadow-lg 
        bg-gray-100 dark:bg-gray-800"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Send Us A Message
          </h2>

          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="p-2 rounded border 
              bg-white dark:bg-gray-700 
              text-black dark:text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded border 
              bg-white dark:bg-gray-700 
              text-black dark:text-white z-50"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300 z-50">
              Phone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="number"
              className="p-2 rounded border 
              bg-white dark:bg-gray-700 
              text-black dark:text-white z-50"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-300 z-50">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="p-2 rounded border 
              bg-white dark:bg-gray-700 
              text-black dark:text-white z-50 "
            />
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 
            text-white py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-row justify-center items-center gap-5 pt-5">
          <Link
            href="https://www.linkedin.com/in/ankit-prajapati-b319472b5"
            className="hover:text-blue-300"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
