import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
