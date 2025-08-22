import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center text-gray-700">
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 9962835944</p>
          <p>✉️ sales@eyetechsecurities.in</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
