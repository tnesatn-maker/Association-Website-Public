import React from "react";

const members = [
  {
    id: 1,
    name: "Arun Kumar",
    city: "Chennai",
    adminRating: 4,
    customerRating: 5,
    website: "https://arunsecurity.com",
    phone: "+91 98765 43210",
    email: "arun@arunsecurity.com",
    badges: ["Platinum", "Verified"],
  },
  {
    id: 2,
    name: "Meena R",
    city: "Coimbatore",
    adminRating: 5,
    customerRating: 4,
    website: "https://meenasecurity.com",
    phone: "+91 91234 56789",
    email: "meena@meenasecurity.com",
    badges: ["Gold"],
  },
];

const Directory = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Member Directory</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.city}</p>

            <div className="mt-2 text-yellow-500">
              {"⭐".repeat(member.adminRating)}{" "}
              <span className="text-gray-700 text-sm">(Admin Rated)</span>
            </div>
            <div className="text-green-500">
              {"⭐".repeat(member.customerRating)}{" "}
              <span className="text-gray-700 text-sm">(Customer Rated)</span>
            </div>

            <div className="mt-3 space-y-1 text-gray-700">
              <p>📞 {member.phone}</p>
              <p>✉️ {member.email}</p>
              <p>
                🌐{" "}
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {member.website}
                </a>
              </p>
            </div>

            <div className="mt-4">
              {member.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 mr-2 rounded-full text-sm font-semibold bg-blue-500 text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
