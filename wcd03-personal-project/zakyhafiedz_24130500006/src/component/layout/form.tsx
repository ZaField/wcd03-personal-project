import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <section className="h-screen snap-start flex items-center justify-center px-4 bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 text-white"
      >
        <div>
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border border-gray-500 rounded-md p-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-500 rounded-md p-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="mt-1 block w-full border border-gray-500 rounded-md p-2 bg-transparent text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your message here..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {submitted && (
          <p className="text-green-400 text-sm">Message sent successfully!</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
