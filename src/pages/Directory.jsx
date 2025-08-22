// src/pages/Directory.jsx
import React from "react";

// Example data (replace later with Firestore fetch)
const members = [
  {
    id: 1,
    name: "Arun Kumar",
    city: "Chennai",
    customerRating: 4.5,
    adminRating: 5,
    badge: "Platinum",
    verified: true,
    website: "https://arunsecurity.com",
    phone: "+91 98765 43210",
    email: "arun@arunsecurity.com"
  },
  {
    id: 2,
    name: "Priya Tech",
    city: "Coimbatore",
    customerRating: 4,
    adminRating: 4.5,
    badge: "Gold",
    verified: false,
    website: "https://priyatech.in",
    phone: "+91 91234 56789",
    email: "info@priyatech.in"
  }
];

const Directory = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">TNESA Member Directory</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <div
            key={m.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold">{m.name}</h2>
            <p className="text-gray-600">{m.city}</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="font-medium">Customer Rating:</span>
              <span className="text-yellow-500">
                {"⭐".repeat(Math.round(m.customerRating))}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium">Admin Rating:</span>
              <span className="text-blue-500">
                {"⭐".repeat(Math.round(m.adminRating))}
              </span>
            </div>

            <div className="mt-2">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                {m.badge}
              </span>
              {m.verified && (
                <span className="ml-2 px-3 py-1 rounded-full text-sm font-semibold bg-green-500 text-white">
                  Verified
                </span>
              )}
            </div>

            <div className="mt-4 text-sm text-gray-700">
              <p>📞 {m.phone}</p>
              <p>✉️ {m.email}</p>
              <p>
                🌐 <a href={m.website} target="_blank" className="text-blue-600 hover:underline">{m.website}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
