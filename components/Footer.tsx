import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-lg text-center">
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="hover:underline">
           Bl-og
        </a>
      </span>
    </footer>
  );
}

export default Footer;
