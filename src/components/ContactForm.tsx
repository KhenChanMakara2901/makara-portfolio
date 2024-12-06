"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import contactData from "@/src/data/contact.json";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors on change
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email Address is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate a submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message Sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  // Explicitly define the valid keys for the iconMap object
  const iconMap: { [key: string]: JSX.Element } = {
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    AiOutlineMail: <AiOutlineMail />,
    AiOutlinePhone: <AiOutlinePhone />,
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-dark py-16 lg:py-24 px-6 lg:px-16 text-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Let&#39;s Connect
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactData.contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300"
              >
                <div className="text-3xl sm:text-4xl text-green-400">
                  {/* Type assert the icon key */}
                  {iconMap[item.icon as keyof typeof iconMap] || null}
                </div>
                <p className="text-lg sm:text-xl font-medium">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            {["name", "email", "subject"].map((field) => (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="text-sm sm:text-base font-semibold mb-2 text-gray-200"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Your ${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }`}
                  className={`px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border ${
                    errors[field] ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 ${
                    errors[field]
                      ? "focus:ring-red-500"
                      : "focus:ring-green-400"
                  } transition-all duration-300`}
                  required
                />
                {errors[field] && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors[field]}
                  </span>
                )}
              </div>
            ))}

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm sm:text-base font-semibold mb-2 text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className={`px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border ${
                  errors.message ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 ${
                  errors.message ? "focus:ring-red-500" : "focus:ring-green-400"
                } transition-all duration-300`}
                required
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
