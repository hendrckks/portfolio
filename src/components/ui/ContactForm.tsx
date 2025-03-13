"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // In a real implementation, this would send the form data to a server
    alert("Form submitted! This is a demo.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl">
      <div className="mb-12">
        <p className="text-lg mb-8">First, a little about yourself.</p>

        <div className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Company/business name*"
              required
              className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-lg mb-8">Tell me about your business and scope of the project.</p>

        <div>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Start typing here...*"
            required
            rows={6}
            className="w-full rounded-[6px] border border-gray-300 p-3 bg-transparent focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-8 py-3 rounded-[6px] bg-black text-white hover:bg-gray-900 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
