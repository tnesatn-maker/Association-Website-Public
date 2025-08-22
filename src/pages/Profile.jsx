import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Member Profile</h1>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Member Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-semibold">Arun Kumar</h2>
            <p className="text-gray-600">Chennai, India</p>

            <div className="flex items-center mt-2 text-yellow-500">
              ⭐⭐⭐⭐☆
              <span className="ml-2 text-gray-700 text-sm">(Admin Rated)</span>
            </div>
            <div className="flex items-center text-green-500">
              ⭐⭐⭐⭐⭐
              <span className="ml-2 text-gray-700 text-sm">(Customer Rated)</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-gray-700">
          <p>📞 +91 98765 43210</p>
          <p>✉️ arun@arunsecurity.com</p>
          <p>
            🌐{" "}
            <a
              href="https://arunsecurity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              arunsecurity.com
            </a>
          </p>
        </div>

        <div className="mt-6">
          <span className="px-3 py-1 mr-2 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            Platinum
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500 text-white">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
