import React from "react";
import contactData from "@/src/data/contact.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const icons: Record<string, React.ElementType> = {
  FaMapMarkerAlt: FaMapMarkerAlt,
  AiOutlineMail: AiOutlineMail,
  AiOutlinePhone: AiOutlinePhone,
};

const ContactForm = () => {
  return (
    <section
      id="contact"
      className=" bg-white dark:bg-dark text-white py-16 px-6 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          CONNECT WITH ME
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {contactData.contactInfo.map((item, index) => {
              const IconComponent = icons[item.icon] || null;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  {IconComponent && (
                    <IconComponent className="text-3xl text-green-400" />
                  )}
                  <p className="text-lg font-medium">{item.value}</p>
                </div>
              );
            })}
          </div>

          <form
            className="bg-gray-800 p-10 rounded-lg shadow-lg space-y-8"
            method="POST"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Your Subject"
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
